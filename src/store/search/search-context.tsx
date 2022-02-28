import React from 'react';

const SearchContext = React.createContext({
    isSearching: false,
    setIsSearching: (value: boolean) => {}
});

export default SearchContext;