'use client'

import { Box, Image, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Instructions from './instructions'

const Title = () => {
  const logo = useColorModeValue("/logowhite.png", "/logoblack.png")

  return (
    <>
      <Flex direction="column" align="center">
        <Box maxW={{ base: "80%", sm: "384px" }} mb="50px">
          <Image src={logo} alt="night mode logo" />
        </Box>
        <Instructions />
      </Flex>
    </>
  );
}

export default Title