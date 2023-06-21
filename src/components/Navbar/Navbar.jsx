import React, { useEffect } from "react";
import { Box, Flex, IconButton, Menu, MenuButton, MenuList, Spacer, Text, MenuItem, Circle, Tooltip, Button } from "@chakra-ui/react";
import { AiFillBell } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { messageSelector } from "../../stores/reducers/MessageReducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { message } = useSelector(messageSelector)
  const { remove } = useLocalStorage()
  const navigate = useNavigate()
  const handleLogout = () => {
    remove({
      key: "accessToken"
    })
    navigate("/")
  }

    return (
      <Flex bg="white" h="60px" px="4" justifyContent={"flex-end"} alignItems={"center"} pr="30px">
        <Box mr={30}>
          <Text fontWeight={'medium'} fontSize={15}>Kênh quản lý</Text>
        </Box>
        <Box display={"flex"} gap={"10px"} position={"relative"}>
        <Box style={{
								zIndex: 1,
								position: "absolute",
								top: 0, 
								left: 0
							}}>
							<Circle size={"4"} bg="tomato">
								<Text fontSize={"11px"} color={"white"}>{message?.length}</Text>
							</Circle>
						</Box>
            <Tooltip
              label = {<div>
                {message.map((message) => (
                  <div> 
                    {message}
                  </div> 
                ))}
              </div>}>
              <IconButton icon={<AiFillBell size={"20px"} color="teal"/>} />

            </Tooltip>
          <Menu>
            <MenuButton>
                <Text fontWeight={"medium"}>Admin</Text>
            </MenuButton>
            <MenuList background={"white"} zIndex={"3"}>
                <MenuItem>
                  <Button Button background={"white"} color="black" textAlign={"left"} w="full">
                    <Text>Thông tin shop</Text>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button background={"white"} color="black" textAlign={"left"} w="full" onClick={handleLogout}>
                    <Text>Đăng xuất</Text>
                  </Button>
                </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    );
  };

export default Navbar