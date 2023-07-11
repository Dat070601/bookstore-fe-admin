import { Box, Flex, Text, Image, Breadcrumb, BreadcrumbItem,Select, Icon, TableContainer, Table, Tbody, Tr, Td, Th, Thead } from "@chakra-ui/react";
import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import { MdAccountBalanceWallet, MdHome} from "react-icons/md";
import { AiFillBook, AiOutlineLineChart } from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";
import {TbSunrise } from "react-icons/tb"
import HomePageViewModel from "./HomePageViewModel";
import { COLOR } from "../../constant";
import RealTime from "../../components/RealTime/RealTime";
import { Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

const Home = () => {
  const { booksBestSeller } = HomePageViewModel()
  const { bookCount } = HomePageViewModel()
  const { wallet } = HomePageViewModel()
  const { data ,setType,type, dataCountOrderCancel, dataIntervalOrder, dataIntervalCancelOrder, setTypeInterval, typeInterval} = HomePageViewModel();
  const handleType=(type)=>{
      setType(type)
  }
  const handleTypeInterval = (typeInterval) => {
    setTypeInterval(typeInterval)
  }

   const options = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
      },
    };
  return (    
    <CustomContainer height={"150vh"}>
        <Flex alignItems="center" mb={6}>
          <Flex alignItems="center">
            <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
              <Icon as={MdHome} boxSize={7}/>
            </Box>
            <Text fontSize="2xl" fontWeight="medium">Trang chủ</Text>
            <RealTime/>
          </Flex>
      </Flex>
      <Flex gap={450}>
        {/* <Box bgGradient="linear(to-br, yellow.100, pink.400)" w={350} h={110} p={3} borderRadius="md" position="relative" boxShadow={"2xl"} rounded='md'>
          <Box display={"flex"} gap={5} padding={3}>
            <TbSunrise size={58}/>
            <Box mt={-2}>
              <Text fontSize="3xl" fontWeight="medium">15,0000 $</Text>
              <Text fontSize="medium" fontWeight="semibold" mb={3}>Weekly Sales</Text>
            </Box>
          </Box>
        </Box>
        <Box bgGradient="linear(to-r, blue.100, blue.300 , blue.500)"  w={350} h={110} p={3} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md'>
          <Box display={"flex"} gap={5} padding={3}>
            <RiBillFill size={58}/>
            <Box mt={-2}>
              <Text fontSize="3xl" fontWeight="medium">15,0000 $</Text>
              <Text fontSize="medium" fontWeight="semibold" mb={3}>Weekly Orders</Text>
            </Box>
          </Box>
        </Box> */}
        <Box bgGradient="linear(to-r,teal.100, teal.300, teal.500)" w={350} h={110} p={3} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md' ml={200}>
          <Box display={'flex'} gap={5} padding={3}>
            <AiFillBook size={58}/>
            <Box mt={-2}>
              <Text fontSize="3xl" fontWeight="medium">{bookCount}</Text>
              <Text fontSize="medium" fontWeight="semibold" mb={3}>Sản phẩm</Text>
            </Box>
          </Box>
        </Box>
        <Box bgGradient="linear(to-r,yellow.100, yellow.300, yellow.500)" w={350} h={110} p={3} borderRadius="md" position="relative" boxShadow={"2xl"}rounded='md'>
          <Box display={'flex'} gap={5} padding={3}>
            <MdAccountBalanceWallet size={58}/>
            <Box mt={-2}>
              <Text fontSize="3xl" fontWeight="medium">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(wallet)}</Text>
              <Text fontSize="medium" fontWeight="semibold" mb={3}>Ví</Text>
            </Box>
          </Box>
        </Box>
      </Flex> 
      <Flex gap={50}>
          <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="30px" padding={"20px"} w={"50%"}>
              <Flex gap={10}>
                  <Text fontSize={'xl'} fontWeight={'semibold'}>Thống kê số lượng đơn hàng: </Text>
                  <Select value={type} onChange={(e)=>{
                      handleType(e.target.value)
                  }} w={150}>
                      <option value='Bảy ngày'>Bảy ngày</option>
                      <option value='Ba mươi ngày'>Ba mươi ngày</option>
                  </Select>
              </Flex>
              <Box w={'full'} mt={5}>
                  {
                      data&&(
                          <Line options={options} data={{
                              labels:data?.labels?.map((item) => item),
                              datasets: [
                                  {
                                      label: data.title,
                                      data: data?.data?.map((item) => item),
                                      borderColor: 'rgb(53, 162, 235)',
                                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                      yAxisID: 'y',
                                  },
                                  {
                                      label: dataCountOrderCancel.title,
                                      data: dataCountOrderCancel?.data?.map((item) => item),
                                      borderColor: 'rgb(255, 99, 132)',
                                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                      yAxisID: 'y',
                                  }
                              ],}} />
                              
                          )
                  }
              </Box>
          </Box>
          <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="30px" padding={"20px"} w={"50%"} >
              <Flex gap={10}>
                  <Text fontSize={'xl'} fontWeight={'semibold'}>Thống kê doanh thu bán hàng: </Text>
                  <Select value={typeInterval} onChange={(e)=>{
                      handleTypeInterval(e.target.value)
                  }} w={150}>
                      <option value='Bảy ngày'>Bảy ngày</option>
                      <option value='Ba mươi ngày'>Ba mươi ngày</option>
                  </Select>
              </Flex>
              <Box w={'full'} mt={5}>
                  {
                      dataIntervalOrder&&(
                          <Line options={options} data={{
                              labels:dataIntervalOrder?.labels?.map((item) => item),
                              datasets: [
                                  {
                                      label: dataIntervalOrder.title,
                                      data: dataIntervalOrder?.data?.map((item) => item),
                                      borderColor: 'rgb(53, 162, 235)',
                                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                      yAxisID: 'y',
                                  },
                                  {
                                      label: dataIntervalCancelOrder.title,
                                      data: dataIntervalCancelOrder?.data?.map((item) => item),
                                      borderColor: 'rgb(255, 99, 132)',
                                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                      yAxisID: 'y',
                                  }
                              ],}} />
                              
                          )
                  }
              </Box>
          </Box>
        </Flex>
      <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="30px" padding={"20px"}>
          <Text fontSize={'xl'} fontWeight={'semibold'}>Các sản phẩm bán chạy nhất hiện nay:</Text>
          <Box mt={'20px'}> 
            <TableContainer  border={'1px'} borderRadius={'10px'} borderColor={'gray.100'}>
              <Table variant='simple' colorScheme={'gray'} size={'sm'}>
                <Thead>
                  <Tr>
                    <Th textAlign={'center'} fontSize={"md"}>#</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Tên Sách</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Thể loại</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Tác giả</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Số lượng</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Giá/1sp</Th>
                    <Th textAlign={'center'} fontSize={"md"}>Đã bán</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {booksBestSeller?.map(book => {
                    return(
                      <Tr>
                        <Th alignItems={'center'} justifyContent={'center'} display={'flex'}><Image src={book.imageUrl} boxSize={100}/></Th>
                        <Td textAlign={'center'} fontSize={"md"}>{book.title}</Td>
                        <Td textAlign={'center'} fontSize={"md"}>{book.nameCategory}</Td>
                        <Td textAlign={'center'} fontSize={"md"}>{book.author}</Td>
                        <Td textAlign={'center'} fontSize={"md"}>{book.quantity}</Td>
                        <Td textAlign={'center'} fontSize={"md"}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.price)}</Td>
                        <Td textAlign={'center'} fontSize={"md"}>{book.sold}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
    </CustomContainer>
  )
}

export default Home