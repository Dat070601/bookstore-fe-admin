import { Box } from '@chakra-ui/react'
import React from 'react'

const CustomContainer = ({ mt = "10px", ml = "300px", position = "absolute", zIndex = 2, children }) => {
  return (
    <Box ml={ml} mt={mt} position={position} zIndex={zIndex}>
        {children}
    </Box>
  )
}

export default CustomContainer