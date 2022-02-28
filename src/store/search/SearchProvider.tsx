import { useReducer } from 'react';

import SearchContext from './search-context';

type State = {
    isSearching: boolean,    
}

function searchReducer(state: State, value: boolean): State {
    if (value === true) {
        return { isSearching: true };
    } else {        
        return { isSearching: false };
    }
};


function SearchProvider(props: any) {
    const [state, dispatch] = useReducer(searchReducer, { isSearching: false });

    function searchHandler(value: boolean) {
        dispatch(value);
    };

    const searchContext = {
        isSearching: state.isSearching,
        setIsSearching: searchHandler,
    };

    return <SearchContext.Provider value={searchContext}>
        {props.children}
    </SearchContext.Provider>;
}

export default SearchProvider;