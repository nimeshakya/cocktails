import React from 'react';
import { Card, Heading } from '@chakra-ui/react';

const AllCocktailCard = ({ data }) => {
    return (
        <Card>
            <Heading size={'sm'}>{data.strDrink}</Heading>
        </Card>
    );
};

export default AllCocktailCard;
