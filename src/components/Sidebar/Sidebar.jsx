import React, { useState } from "react";
import { Box, Flex, List, Spacer, Stack, Text, ListItem, OrderedList, UnorderedList, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, background } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setMessage } from "../../stores/reducers/MessageReducer";

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <>
            <Box bg="gray.100" h="100%" w="250px" p="4" position={"absolute"} zIndex={1} >
                <Box as="a" href="/home" display="block" borderColor={'teal'} border={1} mb={5}>
                    <Logo fontSize={35}/>
                </Box>
                <Stack spacing="0">
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/home")
                            }} _hover={{bg:"gray.200"}}>
                                Trang chủ
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/order"),
                                dispatch(setMessage([]))
                            }} _hover={{bg:"gray.200"}}>
                                Quản lý đơn hàng
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/category")
                            }} _hover={{bg:"gray.200"}}>
                                Quản lý danh mục
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/author")
                            }} _hover={{bg:"gray.200"}}>
                                Quản lý tác giả
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/publisher")
                            }} _hover={{bg:"gray.200"}}>
                                Quản lý Nhà xuất bản
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowToggle>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton gap={'15px'} _hover={{bg:"gray.200"}} onClick={() =>{
                                navigate("/product/1")
                            }}>
                                Quản lý sản phẩm
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                </Stack>
                <Spacer />
            </Box>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Sidebar