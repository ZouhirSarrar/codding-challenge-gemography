import React from "react"
import {Flex,Box} from  '@chakra-ui/core'
import ModeSelector from './ModeSelector'
export default function Boxes () {

return(

  <Flex align="center" justify="center" mt={3} >
    <Box >
        <ModeSelector/>
    </Box>
  </Flex>

)
}
