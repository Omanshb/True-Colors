import { Heading, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Question = ({ question, source }) => {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center" maxW="80%">
        <Heading>
          {question}
        </Heading>
        <Text mt="20px" color="gray.400">
          {source}
        </Text>
      </Flex>
    </>
  );
}

export default Question