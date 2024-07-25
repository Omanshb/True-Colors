import { Heading, Flex } from '@chakra-ui/react'
import React from 'react'

const Question = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" textAlign="center" maxW="80%">
        <Heading>
          How are you? Really, how are you?
        </Heading>
      </Flex>
    </>
  );
}

export default Question