import React from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogCloseButton } from '@chakra-ui/modal'
import { Button } from '@chakra-ui/button'

const AlertBox = ({ title, message, isOpen, onClose, footer = [<Button colorScheme='blue' onClick={() => onClose()}>Ok</Button>] }) => {
  return (
    <AlertDialog isOpen={isOpen}>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogCloseButton onClick={onClose}/>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          {title}
        </AlertDialogHeader>
        <AlertDialogBody>
          {message}
        </AlertDialogBody>
        <AlertDialogFooter>
          {[...footer].map(component => {
            return <>
              {component}
            </>
          })}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertBox