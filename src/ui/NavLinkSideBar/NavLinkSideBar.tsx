import { NavLink } from 'react-router-dom';
import styles from './NavLinkSideBar.module.scss';
import { NavLinkSideBarProps } from './types';
import { cloneElement, useState } from 'react';


export const NavLinkSideBar = ({path, title, icon}:NavLinkSideBarProps) => {
    const [flag, setFlag] = useState<boolean>(false)
    return (
        <NavLink to={path}  className={styles.navLink} onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
            {cloneElement(icon, {
                  fill: flag ? 'var(--sapphire-10)' : 'var(--steel-20)', 
            })}
            {title}
        </NavLink>
    );
  };