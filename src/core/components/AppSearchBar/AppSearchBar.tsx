import styles from './AppSearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import AppInputField from '../AppInputField/AppInputField';
import { Box } from '@mui/material';
import AppContainer from '../AppContainer/AppContainer';

const AppSearchBar: React.FC <{    
    onChange: Function,
    value?: string,
    placeholder: string
}> = (props) => {
    return (
        <AppContainer 
            borderRadius='50px' 
            maxWidth='320px'
            minWidth='320px' >
            <div className={styles['search-bar']}>
                <Box sx={{ width: 16 }} />
                <BsSearch size='16' />
                <Box sx={{ width: 8 }} />
                <div className={styles['search-bar__input']}>
                    <form>
                        <AppInputField                        
                            htmlFor='text' 
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            value={props.value}
                        />                      
                    </form>
                </div>
            </div>
        </AppContainer>
    );
}

export default AppSearchBar;