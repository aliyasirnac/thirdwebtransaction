import { Box, Center, VStack } from "@chakra-ui/react";
import { Dashboard } from "../components/Dashboard";
import { Navbar } from "../components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />

      <Box
        justifyContent={"center"}
        alignContent="center"
        width="100%"
        height="100%"
      >
        <Center width="100%" height="full">
          <VStack flex="1" justifyContent="center" width="100%" height="100%">
            <Dashboard />
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Main;
