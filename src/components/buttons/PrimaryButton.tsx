import styles from './PrimaryButton.module.scss';

const PrimaryButton: React.FC<{
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}> = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick} >
            {props.text}
        </button>
    );
}

export default PrimaryButton;