import React from 'react'
import AuthorCard from './AuthorCard/AuthorCard'
import { Box } from '@chakra-ui/layout'

const AuthorList = ({ authors }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap="10px" mb="100px">
      {authors.map(author => {
        return (
          <AuthorCard authorName={author.authorName} authorId={author.authorId}/>
        )
      })}
    </Box>
  )
}

export default AuthorList