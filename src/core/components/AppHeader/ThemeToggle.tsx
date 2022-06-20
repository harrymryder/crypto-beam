import core from '../../theme/Core.module.scss';
import  styles from './ThemeToggle.module.scss';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useContext } from 'react';
import ThemeContext from '../../store/theme/theme-context';

function ThemeToggle() {
    const theme = useContext(ThemeContext);
    const darkMode: boolean = theme.darkMode;

    function toggleTheme() {
        theme.toggleTheme();
    }

    return (
        <div className={`${darkMode ? styles.darkMode : styles.lightMode} ${core.icon} ${styles.icon}`}>
            {
                darkMode ?
                    <BiMoon onClick={toggleTheme} size='12' />
                    : <BiSun onClick={toggleTheme} size='12' />
            }
        </div>        
    );
}

export default ThemeToggle;