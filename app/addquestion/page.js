// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Image, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import AddQuestionForm from '@/components/questionform'

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex direction="column" align="center">
        <Flex mt="20px" mb="100px">
          <Button bg="#0d0960" mr="10px" color="white" onClick={toggleColorMode} w="130px">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Link href="/">
            <Button bg="#0d0960" ml="10px" color="white" w="130px">
              Home
            </Button>
          </Link>
        </Flex>
        <AddQuestionForm />
      </Flex>
    </>
  )
}
