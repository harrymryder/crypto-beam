import styles from './AppCard.module.scss';

const AppCard: React.FC<{borderRadius?: string}> = (props) => {
    return (
        <div className={styles.AppCard}>{props.children}</div>
    );
}

export default AppCard;