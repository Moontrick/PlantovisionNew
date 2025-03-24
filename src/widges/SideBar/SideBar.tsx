import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { IconHome } from '../../assets/icons/IconHome';
import { IconHelp } from '../../assets/icons/IconHelp';
import { IconDownload2 } from '../../assets/icons/IconDownload2';
import { IconCloud } from '../../assets/icons/IconCloud';
import { NavLinkSideBar } from '../../ui/NavLinkSideBar';

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
            path: '/home',
            title: 'Посмотреть результаты',
            icon: <IconCloud width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
        {
            id: 2,
            path: '/home',
            title: 'Загрузить новый снимок',
            icon: <IconDownload2 width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
        {
            id: 3,
            path: '/home',
            title: 'Помощь',
            icon: <IconHelp width='1.3vw' height='1.3vw' fill="var(--steel-20)"/>
        },
    ]
    return (
      <div className={styles.sideBar}>
        <div className={styles.img_block}/>
       {NavLinkArray.map((item) => (
        <NavLinkSideBar {...item} key={item.id}/>
       ))}

      </div>
    );
  };