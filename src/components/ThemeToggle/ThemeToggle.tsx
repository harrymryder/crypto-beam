import './ThemeToggle.css';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from 'react';
import ThemeContext from '../../store/theme/theme-context';

function ThemeToggle() {
    const context = useContext(ThemeContext);

    function toggleTheme(event: React.FormEvent<HTMLInputElement>) {     
        context.toggleTheme();
    }

    return (
        <div id="darkmode">
            <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
            <label htmlFor="checkbox" className="label">
                <BsMoonStarsFill color="white" size='6' />
                <BsFillSunFill color="yellow"  size='6' />
                <div className="ball"></div>
            </label>
        </div>
    );
}

export default ThemeToggle;