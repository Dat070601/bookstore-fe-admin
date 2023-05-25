import { Box } from '@chakra-ui/react'
import React from 'react'

const CustomContainer = ({ mt = "30px", ml = "300px", position = "absolute", zIndex = 2, children }) => {
  return (
    <Box bg={'gray.200'} height={"130vh"}>
      <Box ml={ml} mt={mt} position={position} zIndex={zIndex}>
          {children}
      </Box>
    </Box>
  )
}

export default CustomContainer