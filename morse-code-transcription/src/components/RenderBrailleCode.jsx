import React, {useContext} from "react";
import { InputDataContext } from "../contexts/InputDataContext";
import {Box, Button, Card, Code, Heading, VStack, Input, Text, Textarea, Flex, border} from "@chakra-ui/react";
const braille = require("braille");

const RenderBrailleCode = (prop) => {
    const textToBrailleContext = useContext(InputDataContext).textExample;
    window.console.log('data from context - ', textToBrailleContext, 'data from prop - ', prop.text);

    if (prop.text === null || prop.text === "") {
        return (
            <Box textAlign={"left"}>
                <Text textAlign={'left'} as={'h4'} mb={4}>
                    Converting to Braille code
                </Text>
                <Text textAlign={"left"}>
                    <Code>Nothing to show</Code>
                </Text>
            </Box>
        )
    } else {
        const textToBraille = braille.toBraille(prop.text);

        return (
            <>
                <VStack mb={4} py={4} width={'100%'} alignItems={'flex-start'} pb={4} spacing={3} borderBottom={'1px solid'} borderColor={'border'}>
                    <Text textAlign={'left'} as={'h4'} mb={4}>
                        Converting to Braille code
                    </Text>

                    <Card width={'100%'} textAlign={'left'} p={4} >
                        <Box mb={4} fontSize={'xxx-large'}>
                            {textToBraille}
                        </Box>
                    </Card>

                </VStack>
            </>
        )
    }
}

export default RenderBrailleCode;
