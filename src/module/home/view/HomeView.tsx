import { useContext, useState } from 'react';
import PrimaryContainer from '../../../components/PrimaryContainer/PrimaryContainer';
import SearchBar from '../../../components/SearchBar/SearchBar';
import SearchContext from '../../../store/search/search-context';
import SearchProvider from '../../../store/search/SearchProvider';
import styles from './HomeView.module.css';

function HomeView() {
    const context = useContext(SearchContext);
    let content;

    if (context.isSearching) {
        content = <p>Searching...</p>;
    } else {
        content = <PrimaryContainer borderRadius='10px'>
            <div className={styles['home-container']}>
                <h1 className={styles.title}>Popular</h1>
                <p>App 1</p>
                <p>App 2</p>
                <p>App 3</p>
            </div>
        </PrimaryContainer>;
    }



    return (
        <div className={styles.home}>
            <SearchBar />
            {content}
        </div>
    );
}

export default HomeView;