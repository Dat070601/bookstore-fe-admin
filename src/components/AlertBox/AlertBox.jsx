import React from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from '@chakra-ui/modal'
import { Button } from '@chakra-ui/button'

const AlertBox = ({ title, message, isOpen, onClose }) => {
  return (
    <AlertDialog isOpen={isOpen}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          {title}
        </AlertDialogHeader>
        <AlertDialogBody>
          {message}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme='blue' onClick={() => onClose()}>Ok</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertBox