import { Box } from '@chakra-ui/react'
import React from 'react'

const CustomContainer = ({ mt = "30px", ml = "300px", position = "absolute", zIndex = 2, children, height, width, minHeight }) => {
  return (
    <Box bg={'gray.300'} minHeight={minHeight} height={height} width={width} position={"primary"}>
      <Box ml={ml} mt={mt} position={position} zIndex={zIndex}>
          {children}
      </Box>
    </Box>
  )
}

export default CustomContainer