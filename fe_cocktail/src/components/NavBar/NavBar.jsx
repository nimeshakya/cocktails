import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    Heading,
    IconButton,
    Button,
    Stack,
    HStack,
    Link as ChakraLink,
    Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = () => {
    return (
        <Stack
            direction={'row'}
            justify={'space-between'}
            align={'center'}
            spacing={4}
            paddingX={5}
            paddingY={5}
            bg={'#fff'}
            className='shadow-custome-1'
        >
            <Heading
                as={'h1'}
                letterSpacing={2}
                fontWeight={600}
                size={'lg'}
                color={'#55311C'}
            >
                Cocktails
            </Heading>
            <HStack spacing={5} color={'#55311C'}>
                <ChakraLink as={ReactRouterLink} to='/'>
                    Cocktails
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to='/mydrinks'>
                    My Drinks
                </ChakraLink>
                <HStack spacing={2}>
                    <Button
                        colorScheme='teal'
                        color={'#F3E6DA'}
                        variant={'solid'}
                    >
                        Login
                    </Button>
                    <Button
                        colorScheme='teal'
                        variant={'outline'}
                        color={'#55311C'}
                    >
                        Signup
                    </Button>
                </HStack>
            </HStack>
        </Stack>
    );
};

export default NavBar;
