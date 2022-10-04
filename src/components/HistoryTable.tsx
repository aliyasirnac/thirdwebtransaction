import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface Props {
  submittedAccount: string;
  submittedQuantity: number;
  isSubmitted: boolean;
}

const HistoryTable = ({
  submittedAccount,
  submittedQuantity,
  isSubmitted,
}: Props) => {
  return (
    <TableContainer bg={"blue.200"} borderRadius={"2xl"}>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Your Transactions</Th>
            {/* TODO burayı tarih olarak güncelle */}
            <Th isNumeric>Amount of Transactions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {isSubmitted ? (
              <>
                <Td>{submittedAccount}</Td>
                <Td isNumeric>${submittedQuantity}</Td>
              </>
            ) : (
              <>
                <Td>-</Td>
                <Td isNumeric></Td>
              </>
            )}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
