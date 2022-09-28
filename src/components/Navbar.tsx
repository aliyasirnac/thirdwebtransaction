import React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
  } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p={2}  bgColor={'blue.200'} flex={1}>
    <Box p="2">
      <Heading size="md">Web3 App</Heading>
      
    </Box>
    <Spacer />
    <Box gap={2}>
      <ConnectWallet />
    </Box>
    </Flex>
  )
}
