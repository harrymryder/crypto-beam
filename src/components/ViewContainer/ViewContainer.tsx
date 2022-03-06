import styles from './ViewContainer.module.scss';

const ViewContainer: React.FC = (props) => {    
    return (
        <div className={styles['view-container']}>
            {props.children}
        </div>
    );
}

export default ViewContainer;