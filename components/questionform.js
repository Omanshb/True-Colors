'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react'

const AddQuestionForm = () => {
  const [question, setQuestion] = useState('')
  const [source, setSource] = useState('')
  const [questionError, setQuestionError] = useState('')
  const router = useRouter()

  const handleSetQuestion = (event) => {
    setQuestion(event.target.value)
  }

  const handleSetSource = (event) => {
    setSource(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuestionError('')

    if (question.trim() === '') {
      setQuestionError('Question cannot be empty')
    } else {

      const res = await fetch('/api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, source }),
      });

      const data = await res.json()
      if (data.success) {
        setQuestion('')
        setSource('')
        router.push('/')
      } else {
        alert('Error adding question: ' + data.error)
      }

    }
  }

  return (
    <VStack spacing={4} w={{ base: "80%", md: "614px" }}>
      <FormControl isInvalid={questionError !== ''}>
        <FormLabel fontWeight="bold">Question</FormLabel>
        <Textarea
          value={question}
          onChange={handleSetQuestion}
          placeholder="What's a cool question that you'd like to add?"
          _placeholder={{ color: 'grey' }}
          size="lg"
          bg="#d0efec"
          color="black"
        />
        {questionError && <FormErrorMessage>{questionError}</FormErrorMessage>}
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Source</FormLabel>
        <Input
          value={source}
          onChange={handleSetSource}
          placeholder="Where'd you get this question? (Could be your name or some link)"
          _placeholder={{ color: 'grey' }}
          size="lg"
          bg="#d0efec"
          color="black"
        />
      </FormControl>
      <Button mt="35px" bg="#11ba7a" color="white" onClick={handleSubmit}>
        Add
      </Button>
    </VStack>
  );
}

export default AddQuestionForm
