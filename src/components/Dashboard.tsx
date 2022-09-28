import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useState } from "react";

export const Dashboard = () => {
  const sdk = useSDK();
  const address = useAddress();
  const [otherAccount, setOtherAccount] = useState("");
  const [quantity, setQuantity] = useState(undefined);

  const sendTransactions = async () => {
    await sdk?.wallet.transfer(otherAccount, quantity);
  };

  return (
    <Box
      justifyContent={"center"}
      alignContent="center"
      width={"full"}
      height={"full"}
      flex={1}
      m={"96"}
    >
      <HStack width={"full"} height={"full"}>
        <Flex justifyContent="center" alignContent="center" flex={1}>
          <Center>
            {address ? (
              <InputGroup>
                <VStack>
                  <Text>
                    Your address: <Text as="b">{address}</Text>
                  </Text>
                  <Input
                    placeholder="To: "
                    size="md"
                    htmlSize={40}
                    value={otherAccount}
                    onChange={(e) => setOtherAccount(e.target.value)}
                  />
                  <Input
                    placeholder="Quantity: "
                    size="md"
                    htmlSize={40}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <Button onClick={sendTransactions}>Send</Button>
                </VStack>
              </InputGroup>
            ) : (
              <InputGroup>
                <VStack>
                  <Text as="b" fontSize="2xl">
                    Connect your wallet
                  </Text>
                </VStack>
              </InputGroup>
            )}
          </Center>
        </Flex>
      </HStack>
    </Box>
  );
};
