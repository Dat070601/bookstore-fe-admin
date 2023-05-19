import React, { useState } from "react";
import { Box, Flex, List, Spacer, Stack, Text, ListItem, OrderedList, UnorderedList, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo";

const Sidebar = () => {

    const navigate = useNavigate()
    return (
        <>
            <Box bg="gray.100" h="100vh" w="250px" p="4" position={"absolute"} zIndex={1} borderRight={"1px solid teal"}>
                <Box as="a" href="/home" display="block" borderColor={'teal'} border={1} mb={5}>
                    <Logo fontSize={28}/>
                    <Text fontWeight={'medium'} fontSize={15}>Kênh quản lý</Text>
                </Box>
                <Stack spacing="0">
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton onClick={() => {
                                navigate("/home")
                            }}>
                                Trang chủ
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton onClick={() => {
                                navigate("/order")
                            }}>
                                Quản lý đơn hàng
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton onClick={() => {
                                navigate("/category")
                            }}>
                                Quản lý danh mục
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box>
                                    <Text>Quản lý sản phẩm</Text>
                                </Box>
                            <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box>
                                            <Link to="/add-product">Thêm sản phẩm</Link>
                                        </Box>
                                    </AccordionButton>
                                    <AccordionButton>
                                        <Box>
                                            <Text>Sửa sản phẩm</Text>
                                        </Box>
                                    </AccordionButton>
                                </AccordionItem>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton onClick={() => {
                                navigate("/dashboard")
                            }}>
                                Chỉ số
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton onClick={() => {
                                navigate("/finance")
                            }}>
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