import {
  Box,
  Center,
  ChakraProvider,
  Container,
  SimpleGrid
} from "@chakra-ui/react";

function ProductBoxes() {
  return (
    <Container maxW="container.lg">
      <SimpleGrid p={5} columns={[1, 2]}>
        <Box fontSize="22">Product Sign Up KYC</Box>
        <Box fontSize="22">Product Suscription KYC</Box>
      </SimpleGrid>
      <SimpleGrid p={3} columns={[1, 2]} gap="5">
        <Box p={4} bg="teal.100" borderRadius="lg" boxShadow="xl"></Box>
        <Box p={4} bg="teal.100" borderRadius="lg" boxShadow="xl"></Box>
      </SimpleGrid>
    </Container>
  );
}
export default ProductBoxes;
