import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Heading,
} from '@chakra-ui/react';

import SearchForm from '../SearchForm/SearchForm';
import AllCocktailCard from '../AllCocktailCard/AllCocktailCard';

// url to get cocktails by letter
const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const AllCocktails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('a');

    const fetchDrinks = async () => {
        setIsLoading(true);
        try {
            const searchUrl = `${cocktailUrl}${searchTerm}`;
            console.log(searchUrl);
            const response = await fetch(searchUrl);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                setCocktails(drinks);
                console.log(drinks);
            } else {
                setCocktails([]);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm]);

    const handleContentDisplay = () => {
        if (isLoading) {
            return (
                <Heading as={'h4'} size={'md'} textAlign={'center'}>
                    Loading...
                </Heading>
            );
        } else if (cocktails.length === 0) {
            return (
                <Heading as={'h4'} size={'md'} textAlign={'center'}>
                    No cocktails found
                </Heading>
            );
        }
    };

    // get some cocktails data at first
    useEffect(() => {}, []);

    return (
        <Box w={'100%'}>
            <Stack
                direction={'column'}
                mt={20}
                justify={'center'}
                alignItems={'center'}
            >
                <SearchForm setSearchTerm={setSearchTerm} />
                <Box w={'100%'} mt={20}>
                    <Heading
                        size={'lg'}
                        textAlign={'center'}
                        letterSpacing={2}
                        fontWeight={600}
                        color={'#55311C'}
                        mb={10}
                    >
                        Cocktails
                    </Heading>

                    <Stack w={'100%'}>
                        {handleContentDisplay() ||
                            cocktails.map((cocktail, index) => {
                                return (
                                    <AllCocktailCard
                                        key={index}
                                        data={cocktail}
                                    />
                                );
                            })}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default AllCocktails;
