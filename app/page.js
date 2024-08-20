// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Image, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import Question from '../components/question'

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [currentQuestion, setCurrentQuestion] = useState("Welcome! I'm sure starting is pretty self explanatory.")
  const [currentSource, setCurrentSource] = useState("")
  console.log(currentQuestion)

  const getNextQuestion = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/question', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await res.json()

    if (response.success) {
      setCurrentQuestion(response.data.question)
      setCurrentSource(response.data.source)
    } else {
      alert('Error getting question: ' + data.error)
    }

  }

  return (
    <>
      <Flex direction="column" align="center">
        <Flex mt="20px" mb="50px">
          <Button bg="#0d0960" mr="10px" color="white" onClick={toggleColorMode} w="130px">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Link href="/addquestion">
            <Button bg="#0d0960" ml="10px" color="white" w="130px">
              Add Question
            </Button>
          </Link>
        </Flex>
        <Question question={currentQuestion} source={currentSource} />
        <Button mt="35px" bg="#0d0960" color="white" w="190px" onClick={getNextQuestion}>
          Get Next Question
        </Button>
      </Flex>
    </>
  )
}
