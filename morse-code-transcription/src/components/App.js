import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Heading,
  Code,
  Grid,
  theme, Container,
} from '@chakra-ui/react';
import {InputDataContext} from "../contexts/InputDataContext";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import InputText from "./InputText";
import RenderMorseCode from "./RenderMorseCode";
import RenderBrailleCode from "./RenderBrailleCode";

function App() {
// saving data into context
  const[textExample, TextData] = useState(null);

  // rendering saved text example
  const saveEnteredText = (val) => {
    const enteredText = val;
    if ( enteredText !== null) {
      window.console.log(enteredText);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Box mx={'auto'} maxW={'100%'} justifyContent={"flex-start"} textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8} alignItems={'start'} >
              <Heading as={"h1"}>Text Converter</Heading>
              <Text>
                Enter your text here and push the button ....
              </Text>
              <InputDataContext.Provider value={{textExample, TextData}}>
                <InputText GetInputData={saveEnteredText(textExample)} />

                <RenderMorseCode text={textExample}/>
                <RenderBrailleCode text={textExample}/>
              </InputDataContext.Provider>

            </VStack>
          </Grid>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
