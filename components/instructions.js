import { OrderedList, ListItem, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, List } from '@chakra-ui/react'
import React from 'react'


const Instructions = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button bg="#0d0960" color="white" onClick={onOpen} w="280px"> Instructions </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Instructions</ModalHeader>
          <ModalBody>
            <Text fontSize="lg">
              Hey! Sometimes shit just gets awkward. This website I made is a commulation
              of some of my favorite and most insightful questions. It's not meant to be a therapy
              session but hopefully after playing this for a while, you can learn just a little bit more
              about the people you surround yourself with. You can play however you'd like as long but just
              remember it's okay to be a little vulnerable.
            </Text>
            <OrderedList mt="10px">
              <ListItem fontSize="lg">Read the question out loud</ListItem>
              <ListItem fontSize="lg">Everyone answer</ListItem>
              <ListItem fontSize="lg">That's literally it</ListItem>
            </OrderedList>
          </ModalBody>

          <ModalFooter>
            <Button bg="#e9011d" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Instructions