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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useState } from "react";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const sdk = useSDK();
  const address = useAddress();
  const [otherAccount, setOtherAccount] = useState("");
  const [quantity, setQuantity] = useState(0.001);
  const isAdmin = address === import.meta.env.VITE_ADMIN_ADDRESS;

  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const sendTransactions = async () => {
    await sdk?.wallet.transfer(otherAccount, quantity);

    setOtherAccount("");
    setQuantity(0.001);
    toast.success("Successfully transfered!");
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
                  <NumberInput
                    onChange={(valueString) => setQuantity(parse(valueString))}
                    value={format(quantity)}
                    defaultValue={0.001}
                    min={0.001}
                    max={10}
                    step={0.001}
                    width="full"
                    placeholder="Quantity: "
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
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
