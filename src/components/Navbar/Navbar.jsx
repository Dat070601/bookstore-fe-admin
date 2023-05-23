import React from "react";
import { Box, Flex, IconButton, Menu, MenuButton, MenuList, Spacer, Text, MenuItem } from "@chakra-ui/react";
import { AiFillBell } from 'react-icons/ai'

const Navbar = () => {
    return (
      <Flex bg="white" h="60px" px="4" justifyContent={"flex-end"} alignItems={"center"} pr="30px">
        <Text fontWeight={'medium'} fontSize={15}>Kênh quản lý</Text>
        <Box display={"flex"} gap={"10px"}>
            <IconButton icon={<AiFillBell size={"20px"} color="teal"/>} />
          <Menu>
            <MenuButton>
                <Text fontWeight={"medium"}>Admin</Text>
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <Text>Thông tin shop</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Đăng xuất</Text>
                </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    );
  };

export default Navbar