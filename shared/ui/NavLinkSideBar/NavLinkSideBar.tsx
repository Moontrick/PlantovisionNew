import Link from 'next/link';
import styles from './NavLinkSideBar.module.scss';
import { NavLinkSideBarProps } from './types';
import { cloneElement, ReactElement, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, CircularProgress, IconButton } from '@mui/material';


export const NavLinkSideBar = ({path, title, icon}:NavLinkSideBarProps) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const fullPathname = usePathname();
  
    async function handleSetPathname() {
      if (path === fullPathname) return;
  
      startTransition(() => {
        router.push(path);
      });
    }
    return (
        // <Link to={path}  className={styles.navLink} onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
        //     {cloneElement(icon, {
        //           fill: flag ? 'var(--sapphire-10)' : 'var(--steel-20)', 
        //     })}
        //     {title}
        // </Link>
        <Box
        width={'100%'}
        height={'42'}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {isPending ? <CircularProgress style={{color: 'var(--sapphire-20)'}}/> :
        <button 
          onClick={() => handleSetPathname()}
          type="button"
          className={styles.item}
          style={{
            background: fullPathname.includes(path) ? 'var(--unique-white-10)' : 'transparent'
          }}
        >
          {cloneElement(icon as ReactElement, { fill: fullPathname.includes(path) ? 'var(--sapphire-20)' : 'var(--steel-80)' })}
          <div className={styles.title} style={{color: fullPathname.includes(path) ? 'var(--sapphire-20)' : 'var(--steel-80)'}}>
            {title}
          </div>
        </button>
        }
      </Box>
    );
  };