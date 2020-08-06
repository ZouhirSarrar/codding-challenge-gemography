import React from 'react';
import './App.css';
import {ThemeProvider,theme,ColorModeProvider,CSSReset,Flex,Box,IconButton,useColorMode,Text} from "@chakra-ui/core";
function App() {

  return (
    <ThemeProvider theme={theme}>

    <ColorModeProvider>
    <CSSReset/>

    <Boxes/>
        <Text fontSize='5xl' textAlign='center'>
          Codding Challenge Gemography
        </Text>  
    </ColorModeProvider>
    </ThemeProvider>
  );
}

const Boxes = () => {

return(
  <Flex>
  <Box>
  <ModeSelector/>

        </Box>
  </Flex>
)
}

const ModeSelector = () =>{
  const {colorMode,toggleColorMode}=useColorMode()
  return(
    <Box>
    <IconButton icon={colorMode === 'light'?'moon' : 'sun'} onClick={toggleColorMode}/>
    </Box>
  )
}

export default App;
