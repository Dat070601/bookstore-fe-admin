import React, { useState } from "react";
import { Box, Flex, List, Spacer, Stack, Text, ListItem, OrderedList, UnorderedList, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, background } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo";
import { AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {

    const navigate = useNavigate()
    return (
        <>
            <Box bg="white" h="100%" w="250px" p="4" position={"absolute"} zIndex={1}>
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
                                navigate("/order")
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
                    <Accordion allowToggle>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton gap={'15px'} _hover={{bg:"gray.200"}}>
                                <Box>
                                    <Text>Quản lý sản phẩm</Text>
                                </Box>
                            <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <AccordionItem borderColor="transparent" borderWidth="0">
                                    <AccordionButton  _hover={{bg:"gray.200"}}>
                                        <Box display={'flex'} gap={2}>
                                            <Box mt={1}>
                                                <AiOutlineArrowRight/>
                                            </Box>
                                            <Link to="/add-product">Thêm sản phẩm</Link>
                                        </Box>
                                    </AccordionButton>
                                    <AccordionButton  _hover={{bg:"gray.200"}}>
                                        <Box display={'flex'} gap={2}>
                                            <Box mt={1}>
                                                <AiOutlineArrowRight/>
                                            </Box>
                                            <Link to={""}>Sửa sản phẩm</Link>
                                        </Box>
                                    </AccordionButton>
                                </AccordionItem>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/dashboard")
                            }} _hover={{bg:"gray.200"}}>
                                Chỉ số
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/finance")
                            }} _hover={{bg:"gray.200"}}>
                                Tài Chính
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                </Stack>
                <Spacer />
                <Box>
                    {/* Thêm button hình chuông thông báo ở đây */}
                    {/* Thêm button ảnh của người dùng ở đây */}
                </Box>
            </Box>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Sidebar