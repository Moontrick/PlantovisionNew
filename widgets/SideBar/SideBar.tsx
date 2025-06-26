
import styles from './SideBar.module.scss';
import { IconHome } from '@/public/assets/icons/IconHome';
import { IconHelp } from '@/public/assets/icons/IconHelp';
import { IconDownload2 } from '@/public/assets/icons/IconDownload2';
import { IconCloud } from '@/public/assets/icons/IconCloud';
import PlantovisionLogo from '@/public/assets/images/Plantovision_logo_2.png';
import { NavLinkSideBar } from '@/shared/ui/NavLinkSideBar';
import Image from 'next/image';

export const SideBar = () => {
    const NavLinkArray = [
        {
            id: 0,
            path: '/home',
            title: 'Главная',
            icon: <IconHome width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
        {
            id: 1,
            path: '/result',
            title: 'Посмотреть результаты',
            icon: <IconCloud width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
        {
            id: 2,
            path: '/upload',
            title: 'Загрузить новый снимок',
            icon: <IconDownload2 width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
        {
            id: 3,
            path: '/help',
            title: 'Помощь',
            icon: <IconHelp width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
    ]
    return (
      <div className={styles.sideBar}>
        <div className={styles.logoContainer}>
            <Image src={PlantovisionLogo} alt='PlantovisionLogo' className={styles.logo}/>
        </div>
       
       {NavLinkArray.map((item) => (
        <NavLinkSideBar {...item} key={item.id}/>
       ))}

      </div>
    );
  };