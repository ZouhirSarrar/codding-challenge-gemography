
import React from 'react'
import {Box,useColorMode,IconButton} from '@chakra-ui/core'

export default function ModeSelector  () {
  const {colorMode,toggleColorMode}=useColorMode()
  return(
    <Box>
    <IconButton icon={colorMode === 'light'?'moon' : 'sun'} onClick={toggleColorMode}/>
    </Box>
  );
}
