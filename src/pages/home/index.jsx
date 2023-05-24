import { Box, Flex, Text, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from "@chakra-ui/react";
import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import { MdHome} from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";

const Home = () => {
  return (    
    <CustomContainer>
        <Flex alignItems="center" mb={6}>
          <Flex alignItems="center">
            <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
              <Icon as={MdHome} boxSize={7}/>
            </Box>
            <Text fontSize="2xl" fontWeight="medium">Trang chủ</Text>
          </Flex>
      </Flex>
      <Flex gap={50}>
        <Box bgGradient="linear(to-br, yellow.100, pink.400)" minW= "md" p={8} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md'>
          <Box display={"flex"} gap={250}>
            <Text fontSize="lg" fontWeight="semibold" mb={3}>Weekly Sales</Text>
            <AiOutlineLineChart size={25}/>
          </Box>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>$ 15,0000</Text>
          <Text fontSize="sm">Increased by 60%</Text>
        </Box>
        <Box bgGradient="linear(to-r, blue.100, blue.300 , blue.500)" minW="md" p={8} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md'>
          <Box display={"flex"} gap={250}>
            <Text fontSize="lg" fontWeight="semibold" mb={3}>Weekly Orders</Text>
            <BsBookmark size={23}/>
          </Box>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>45,6334</Text>
          <Text fontSize="sm">Decreased by 10%</Text>
        </Box>
        <Box bgGradient="linear(to-r,teal.100, teal.300, teal.500)" minW="md" p={8} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md'>
          <Box display={'flex'} gap={250}>
            <Text fontSize="lg" fontWeight="semibold" mb={3}>Visitors Online</Text>
            <RiVipDiamondLine size={23}/>
          </Box>
          <Text fontSize="2xl" fontWeight="bold" mb={5}>95,5741</Text>
          <Text fontSize="sm">Increased by 5%</Text>
        </Box>
      </Flex> 
    </CustomContainer>
  )
}

export default Home