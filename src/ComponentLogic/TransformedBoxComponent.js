import {
  Box,
  Center,
  ChakraProvider,
  Container,
  SimpleGrid
} from "@chakra-ui/react";
import { BsDashCircleFill } from "react-icons/bi";

function changedBox() {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={[1, 2]} gap="5">
        <Box fontSize="22" textColor="white">
          Merchant KYC
        </Box>
        <Box fontSize="22" textColor="white">
          Store KYC
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1]} gap="5">
        <Box p={4} bg="teal.100" borderRadius="lg" boxShadow="xl">
          <Box
            p={1}
            fontSize={20}
            bg="green.300"
            borderRadius="lg"
            boxShadow="xl"
          >
            <Center>Merchant and Outlet Successfully Registered </Center>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
export default changedBox;
