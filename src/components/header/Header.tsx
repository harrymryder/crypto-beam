import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/bananas.png';
import ThemeContext from '../../store/theme/theme-context';

function Header() {
    const theme = useContext(ThemeContext);
    const darkMode: boolean = theme.darkMode;

    const classesFunction = (isActive: boolean): string => {
        console.log('Running function');
        let classes: string = styles.link;
        console.log(`Is active: ${isActive}`);
        classes = isActive ? classes.concat(` ${styles.active}`).toString() : classes;
        // classes = darkMode ? classes.concat(` ${styles['dark-mode']}`).toString() : classes.concat(` ${styles['light-mode']}`).toString();
        return classes;
    };

    return (
        <header className={styles.header}>
            <img src={logo} height='24' width='24' alt='logo' />
            <div>
                <NavLink className={({ isActive }) =>
                    isActive ? classesFunction(true) : classesFunction(false)
                } to='/'>Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? classesFunction(true) : classesFunction(false)
                } to='/profile'>Profile</NavLink>
            </div>
            <div className={styles['header-right']}>
                {/* <p className={styles['header-item']}>Connect wallet</p>                 */}
                <div className={styles['header-item']}>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default Header;