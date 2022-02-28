import { useState } from 'react';
import { setTimeout } from 'timers';

import PrimaryContainer from '../../../components/PrimaryContainer/PrimaryContainer';
import SearchBar from '../../../components/SearchBar/SearchBar';
import styles from './HomeView.module.css';

function HomeView() {
    var Spinner = require('react-spinkit');
    const [isSearching, setIsSearching] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    let content;

    function onSearchHandler(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        if (value.length > 0) {
            setIsFetching(true);
            setInterval(() => setIsFetching(false), 5000);            
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }
    }

    if (isFetching) {
        content = <Spinner name='circle' />
    } else if (isSearching) {
        content = <p>Apps here...!</p>
    } else {
        content = <PrimaryContainer borderRadius='10px'>
            <div className={styles['home-container']}>
                <h1>Popular</h1>
                <p>App 1</p>
                <p>App 2</p>
                <p>App 3</p>
            </div>
        </PrimaryContainer>;
    }

    return (
        <div className={styles.home}>
            <SearchBar onSearch={onSearchHandler} />
            {content}
        </div>
    );
}

export default HomeView;