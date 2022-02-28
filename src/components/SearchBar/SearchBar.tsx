import { useContext } from 'react';

import styles from './SearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import PrimaryContainer from '../PrimaryContainer/PrimaryContainer';
import SearchContext from '../../store/search/search-context';

function SearchBar() {
    const context = useContext(SearchContext);
    
    function onSearchHandler(event: React.FormEvent<HTMLInputElement>) {
        const value: string = event.currentTarget.value;        
        if (value.length > 0) {
            context.setIsSearching(true);
        } else {
            context.setIsSearching(false);
        }

        console.log(context.isSearching);
    }

    return (
        <PrimaryContainer borderRadius='50px' >
            <div className={styles['search-bar']}>
                <BsSearch />
                <div className={styles['search-bar__input']}>
                    <form>
                        <label htmlFor='text' />
                        <input id='text' placeholder='Search for something...' onChange={onSearchHandler} />
                    </form>
                </div>
            </div>
        </PrimaryContainer>
    );
}

export default SearchBar;