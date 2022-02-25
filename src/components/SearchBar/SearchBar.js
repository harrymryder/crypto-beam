import styles from './SearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import PrimaryContainer from '../PrimaryContainer/PrimaryContainer';

function SearchBar() {
    return (
        <PrimaryContainer borderRadius='50px' >
            <div className={styles['search-bar']}>
                <BsSearch />
                <div className={styles['search-bar__input']}>
                    <form>
                        <label htmlFor='text' />
                        <input id='text' placeholder='Search for something...' />
                    </form>
                </div>
            </div>
        </PrimaryContainer>
    );
}

export default SearchBar;