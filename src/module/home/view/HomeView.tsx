import PrimaryContainer from '../../../components/PrimaryContainer/PrimaryContainer';
import SearchBar from '../../../components/SearchBar/SearchBar';
import styles from './HomeView.module.css';

function HomeView() {
    return (
        <div className={styles.home}>
            <SearchBar />
            <PrimaryContainer borderRadius='10px'>
                <div className={styles['home-container']}>
                    <h1 className={styles.title}>Popular</h1>
                    <p>App 1</p>
                    <p>App 2</p>
                    <p>App 3</p>
                </div>
            </PrimaryContainer>
        </div>
    );
}

export default HomeView;