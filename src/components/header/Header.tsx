import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import logo from '../../assets/bananas.png';
import ThemeContext from '../../store/theme/theme-context';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Header() {
    const theme = useContext(ThemeContext);
    // const darkMode: boolean = theme.darkMode;

    const classesFunction = (isActive: boolean): string => {        
        let classes: string = styles.link; 
        classes = isActive ? classes.concat(` ${styles.active}`).toString() : classes;
        // classes = darkMode ? classes.concat(` ${styles['dark-mode']}`).toString() : classes.concat(` ${styles['light-mode']}`).toString();
        return classes;
    };

    function connectWalletHandler(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
    }

    return (
        <header className={styles.header}>
            <div className={styles['header-left']}>        
                {/* <img src={logo} height='24' width='24' alt='logo' /> */}
            </div>
            <div className={styles['nav-links']}>
                {/* Home */}
                <NavLink className={({ isActive }) =>
                    isActive ? classesFunction(true) : classesFunction(false)
                } to='/'>Home</NavLink>

                {/* Campaigns */}
                <NavLink className={({ isActive }) =>
                    isActive ? classesFunction(true) : classesFunction(false)
                } to='/campaigns'>Campaigns</NavLink>

                {/* My donations */}
                <NavLink className={({ isActive }) =>
                    isActive ? classesFunction(true) : classesFunction(false)
                } to='/my-donations'>My donations</NavLink>
            </div>
            <div className={styles['header-right']}>             
                <div className={styles['header-item']}>
                    <ThemeToggle />
                </div>
                <PrimaryButton text='Connect' onClick={connectWalletHandler} animate={false} />
            </div>
        </header>
    );
}

export default Header;