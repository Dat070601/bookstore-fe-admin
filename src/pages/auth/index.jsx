import React, { useEffect } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Box,
  Link,
  Text,
  Image,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import Logo from '../../components/Logo';
import { COLOR } from '../../constant';
import LoginPageViewModel from './LoginPageViewModel';

const Login = () => {
    const {       
        isSuccess,
        message,
        accessToken,
        refreshToken,
        formik,
        loginAsync,
        saveToken
    } = LoginPageViewModel();
    
        useEffect(() => {
            saveToken({
                key: 'accessToken',
                value: accessToken
            });
        }, [accessToken]);
    
      return (
        <Box h={"100vh"} bg={"gray.200"}>
            <Box display={'flex'} gap={150} alignItems={'center'} padding={200} justifyContent={'center'}>
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
                <form onSubmit={formik.handleSubmit}>
                    <Flex
                        flexDirection="column"
                        p={12}
                        bg="white"
                        borderRadius={8}
                        w={400}
                        h={450}
                    >
                        <Box>
                            <Heading mb={6} float={'left'}>Đăng nhập</Heading>
                        </Box>
                        <FormControl isInvalid={formik.errors.email ? true : false}>
                            <Input
                            placeholder="johndoe@gmail.com"
                            type="email"
                            value = {formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            variant="filled"
                            mb={3}
                            borderColor={'gray.300'}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.password ? true : false}>
                            <Input
                            placeholder="**********"
                            type="password"
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            name="password" 
                            variant="filled"
                            mb={6}
                            borderColor={'gray.300'}
                            />
                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                        </FormControl>
                        <Button bgColor={'teal.400'} mb={8} mt={5} type = 'submit' isLoading={false}>
                        Đăng nhập
                        </Button>
                        <Text mt="10px" color="red">{message}</Text>
                        <Box>
                            <Link float={'right'}>Quên mật khẩu ?</Link>
                        </Box>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
}

export default Login