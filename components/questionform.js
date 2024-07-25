'use client'
import { Button, Textarea, Input } from '@chakra-ui/react'
import { React, useState } from 'react'

const AddQuestionForm = () => {

  let [question, setQuestion] = useState('')
  let handleSetQuestion = (event) => {
    setQuestion(event.target.value)
  }

  let [source, setSource] = useState('')
  let handleSetSource = (event) => {
    setSource(event.target.value)
  }

  return (
    <>
      <Textarea
        value={question}
        onChange={handleSetQuestion}
        placeholder="What's a cool question that you'd like to add?"
        _placeholder={{ color: 'grey' }}
        size="lg"
        mb="20px"
        bg="#d0efec"
        color="black"
        maxW={{ base: "80%", md: "614px" }} />
      <Input
        value={source}
        onChange={handleSetSource}
        placeholder="Where'd you get this question? (Could be your name or some link)"
        _placeholder={{ color: 'grey' }}
        size="lg"
        mb="40px"
        bg="#d0efec"
        color="black"
        maxW={{ base: "80%", md: "614px" }} />
      <Button bg="#11ba7a" color="white">
        Add
      </Button>
    </>
  );
}

export default AddQuestionForm