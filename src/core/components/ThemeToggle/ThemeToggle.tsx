import  styles from './ThemeToggle.module.scss';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from 'react';
// import ThemeContext from '../../store/theme-context';
import { style } from '@mui/system';

function ThemeToggle() {
    // const theme = useContext(ThemeContext);
    // const darkMode: boolean = theme.darkMode;

    function toggleTheme() {
        // theme.toggleTheme();
    }


    return (
        // <div className={darkMode ? styles.darkMode : styles.lightMode}>
        //     {
        //         darkMode ?
        //             <BsMoonStarsFill className={styles.icon} onClick={toggleTheme} size='16' />
        //             : <BsFillSunFill onClick={toggleTheme} size='16' />
        //     }
        // </div>
        <div></div>
        // context.darkMode ?
        // <BsFillSunFill color="yellow" size='6' /> :
        // <div id="darkmode">

        //     <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
        //     <label htmlFor="checkbox" className="label">
        //         d
        // <BsMoonStarsFill color="white" size='6' />
        // <BsFillSunFill color="yellow"  size='6' />
        //         <div className="ball"></div>
        //     </label>
        // </div>
    );
}

export default ThemeToggle;