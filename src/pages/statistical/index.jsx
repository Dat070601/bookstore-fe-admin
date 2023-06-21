import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
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
import StatisticalViewModel from './StatisticalViewModel';
import { Box,Flex,Icon,Select, Text } from '@chakra-ui/react';
import { AiFillPieChart } from 'react-icons/ai';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const Statistical = () => {

    const { data ,setType,type} = StatisticalViewModel();
    const handleType=(type)=>{
        setType(type)
    }
     const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
        },
      };
  return (
    <CustomContainer height={"100vh"}>
        <Flex alignItems="center" mb={6}>
          <Flex alignItems="center">
            <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
              <Icon as={AiFillPieChart} boxSize={7}/>
            </Box>
            <Text fontSize="2xl" fontWeight="medium">Thống kê</Text>
          </Flex>
        </Flex>
        <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="30px" padding={"20px"} >
            <Flex gap={10}>
                <Text fontSize={'xl'} fontWeight={'semibold'}>Thống kê số lượng đơn hàng: </Text>
                <Select placeholder='Select option' value={type} onChange={(e)=>{
                    handleType(e.target.value)
                }} w={150}>
                    <option value='Bảy ngày'>Bảy ngày</option>
                    <option value='Ba mươi ngày'>Ba mươi ngày</option>
                </Select>
            </Flex>
            <Box w={500} minHeight={'500px'}>
                {
                    data&&(
                        <Line options={options} data={{
                            labels:data?.labels?.map((item) => item),
                            datasets: [
                                {
                                    label: 'Số lượng đơn đặt',
                                    data: data?.data?.map((item) => item),
                                    borderColor: 'rgb(255, 99, 132)',
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                    yAxisID: 'y',
                                },
                            ],}} />
                            
                            )
                }
            </Box>
        </Box>
    </CustomContainer>
  )
}

export default Statistical