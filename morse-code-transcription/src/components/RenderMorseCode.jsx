import React, {useContext, useRef} from "react";
import { InputDataContext } from "../contexts/InputDataContext";
import {Box, Button, Card, Code, Heading, VStack, Input, Text, Textarea, Flex, border} from "@chakra-ui/react";
const morse = require("morsify");

const RenderMorseCode = (prop) => {
    const buttonRef = useRef(null);

    if (prop === null || prop.text === null || prop.text === "") {
        return (
            <Box textAlign={"left"}>
                <Text textAlign={'left'} as={'h4'} mb={4}>
                    Converting to Morse code
                </Text>
                <Text textAlign={"left"}>
                    <Code>Nothing to show</Code>
                </Text>
            </Box>
        )
    } else {
        const textToMorse = morse.encode(prop.text, { space: "  " });
        let audio;

        const audioPlay = () => {
            if (audio != null) {
                audio.stop();
                audio = null;
            }
            audio = morse.audio(prop.text)
            audio.play()
        };
        const audioStop = () => {
            if (audio != null) {
                audio.stop();
                audio = null;
            }
        }

        return (
            <>
                <VStack mb={4} py={4} width={'100%'} alignItems={'flex-start'} pb={4} spacing={3} borderBottom={'1px solid'} borderColor={'border'}>
                    <Text textAlign={'left'} as={'h4'} mb={4}>
                        Converting to Morse code
                    </Text>

                    <Card width={'100%'} textAlign={'left'} p={4} >
                        <Box mb={4} fontSize={'xxx-large'}>
                            {textToMorse}
                        </Box>
                        <Text fontSize={'x-small'} pb={2}> (please push Play to listen this phrase)</Text>
                        <Flex gap={2} flexDirection={'row'}>
                            <Button ref={buttonRef} onClick={audioPlay}>
                                Play
                            </Button>
                            <Button onClick={audioStop}>
                                Stop
                            </Button>
                        </Flex>
                    </Card>

                </VStack>
            </>
        )
    }
}

export default RenderMorseCode;
