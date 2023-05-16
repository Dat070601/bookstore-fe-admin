import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  DarkMode,
  useColorModeValue,
  Box,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import { COLOR } from '../../constant';

const Login = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <DarkMode>
        <Flex h="94vh" alignItems="center" gap={150}>
            <Box h="46vh" display={"flex"} flexDir={"column"} justifyContent={"flex-start"} alignItems={"center"}>
                <Logo fontSize={55} />
                <Box display={"flex"} flexDir={"column"}>
                    <Text float={'left'} fontFamily={'Arial'} fontSize={'xl'}>Kênh chủ cửa hàng</Text>
                    <Box>
                        <Text float={'left'}>Quản lý shop của bạn một cách hiệu quả hơn trên</Text>
                        <Text>trang web kênh chủ cửa hàng của chúng tôi</Text>
                    </Box>
                    <Image mt="10px" src='https://res.cloudinary.com/duu07kasy/image/upload/v1684232635/mQqMQZthNHJKyVi_sixg7w.png' h={300}/>
                </Box>
            </Box>
            <Flex
                flexDirection="column"
                bg={formBackground}
                p={12}
                borderRadius={8}
                w={400}
                h={400}
            >
                <Box>
                    <Heading mb={6} float={'left'} >Đăng nhập</Heading>
                </Box>
                <Input
                placeholder="johndoe@gmail.com"
                type="email"
                variant="filled"
                mb={3}
                />
                <Input
                placeholder="**********"
                type="password"
                variant="filled"
                mb={6}
                />
                <Button bgColor={COLOR} mb={8}>
                Đăng nhập
                </Button>
                <Box>
                    <Link float={'right'}>Quên mật khẩu ?</Link>
                </Box>
            </Flex>
        </Flex>
    </DarkMode>
  );
};

export default Login;
