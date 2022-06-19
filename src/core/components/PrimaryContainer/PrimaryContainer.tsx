import { useContext } from 'react';
import ThemeContext from '../../store/theme/theme-context';
import styles from './PrimaryContainer.module.css';

const PrimaryContainer: React.FC<{borderRadius: string}> = (props) => {
    const theme = useContext(ThemeContext);
    const darkMode: boolean = theme.darkMode;
    
    return (
        <div
            style={{borderRadius: props.borderRadius}}
            className={`${styles.container} ${darkMode ? styles['dark-mode'] : styles['light-mode']}`}>
            {props.children}
        </div>
    );
}

export default PrimaryContainer;