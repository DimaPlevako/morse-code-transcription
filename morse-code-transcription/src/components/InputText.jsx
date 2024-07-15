import React, { useContext, useRef } from "react";
import { useState } from 'react';
import { InputDataContext } from '../contexts/InputDataContext';

import {Input, HStack, Button, Text} from '@chakra-ui/react'

const GetInputData = (props) => {
    const inputRef = useRef(null);
    const { TextData } = useContext(InputDataContext);

    return (
        <HStack mb={6} pb={4} spacing={3} width={'100%'} borderBottom={'1px solid'} borderColor={'border'}>
            <Input
                type={'text'}
                variant={'filled'}
                placeholder={'Enter text to convert'}
                ref={inputRef}
            />
            <Button
                onClick={() => {
                    TextData(inputRef.current.value)
                }}
                colorScheme="teal"
                variant="solid"
                size="md"
            >
                Convert
            </Button>
        </HStack>
    );
}

export default GetInputData;