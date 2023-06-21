import React from 'react'
import { Box } from '@chakra-ui/layout'
import PublisherCard from './PublisherCard/PublisherCard'

const PublisherList = ({ publishers }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap="10px" mb="100px">
      {publishers.map(publisher => {
        return (
          <PublisherCard 
            publisherId={publisher.id} 
            publisherName={publisher.publisherName} 
            description={publisher.description} 
          />
        )
      })}
    </Box>
  )
}

export default PublisherList