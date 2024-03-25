import React, { useRef, useEffect } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const SearchForm = ({ setSearchTerm }) => {
    const searchRef = useRef('');

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    const searchCocktail = () => {
        const searchText = searchRef.current.value;
        setSearchTerm(searchText);
    };

    return (
        <form className='w-1/2 bg-white p-5 shadow-custome-1 py-6'>
            <FormControl>
                <FormLabel color={'#653A22'} mb={4}>
                    Search for cocktails . . .
                </FormLabel>
                <Input
                    color={'#9E745C'}
                    type='text'
                    width={'100%'}
                    variant={'filled'}
                    ref={searchRef}
                    onChange={searchCocktail}
                />
            </FormControl>
        </form>
    );
};

export default SearchForm;
