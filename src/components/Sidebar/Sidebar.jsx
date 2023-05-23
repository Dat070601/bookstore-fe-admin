import React, { useState } from "react";
import { Box, Flex, List, Spacer, Stack, Text, ListItem, OrderedList, UnorderedList, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel } from "@chakra-ui/react";
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
                            }}>
                                Trang chủ
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/order")
                            }}>
                                Quản lý đơn hàng
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton onClick={() => {
                                navigate("/category")
                            }}>
                                Quản lý danh mục
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowToggle>
                        <AccordionItem borderColor="transparent" borderWidth="0">
                            <AccordionButton gap={'15px'}>
                                <Box>
                                    <Text>Quản lý sản phẩm</Text>
                                </Box>
                            <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <AccordionItem borderColor="transparent" borderWidth="0">
                                    <AccordionButton>
                                        <Box display={'flex'} gap={2}>
                                            <Box mt={1}>
                                                <AiOutlineArrowRight/>
                                            </Box>
                                            <Link to="/add-product">Thêm sản phẩm</Link>
                                        </Box>
                                    </AccordionButton>
                                    <AccordionButton>
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
                            }}>
                                Chỉ số
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem borderColor="transparent" borderWidth="0">
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