import styles from './AppScreen.module.scss';

const AppScreen: React.FC = (props) => {    
    return (
        <div className={styles['app-screen']}>
            {props.children}
        </div>
    );
}

export default AppScreen;