import React from "react";
import { Box, Flex, IconButton, Menu, MenuButton, MenuList, Spacer, Text, MenuItem } from "@chakra-ui/react";
import { AiFillBell } from 'react-icons/ai'

const Navbar = () => {
    return (
      <Flex bg="gray.100" h="60px" px="4" justifyContent={"flex-end"} alignItems={"center"} pr="30px">
        <Box display={"flex"} gap={"10px"}>
            <IconButton icon={<AiFillBell size={"20px"} color="teal"/>} />
          {/* Thêm button hình chuông thông báo ở đây */}
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