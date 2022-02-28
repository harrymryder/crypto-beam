import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/bananas.png';
import ThemeContext from '../../store/theme/theme-context';

function Header() {
    const theme = useContext(ThemeContext);
    const darkMode: boolean = theme.darkMode;
    let classes = styles.link;
    if (theme.darkMode) {
        classes = styles['dark-mode'];
    } else {
        classes = styles['light-mode'];
    }

   
     

    const classesFunction = (props:any): string => {
        let classes: string = styles.link;
        classes = props.isActive ? classes.concat(` ${styles.active}`).toString() : classes;
        classes = darkMode ? classes.concat(` ${styles['dark-mode']}`).toString() : classes.concat(` ${styles['light-mode']}`).toString();
        console.log(classes);
        return classes;
    };

    return (
        <header className={styles.header}>
            <img src={logo} height='24' width='24' alt='logo'/>
            <div>
                <NavLink className={classesFunction} to='/'>Home</NavLink>
                <NavLink className={`${styles.link} ${classes}`} to={'item-name'}>Governance</NavLink>                
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