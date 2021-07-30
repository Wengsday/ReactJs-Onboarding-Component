import {
  Box,
  Center,
  ChakraProvider,
  Container,
  SimpleGrid
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList
} from "@chakra-ui/react";
import PostCompany from "./ApiCallouts/CalloutMerchantValidation";
import PostStore from "./ApiCallouts/CalloutStoreValidation";
import { BsDashCircleFill } from "react-icons/bi";
import PostCompanyGP from "./ApiCallouts/CalloutMerchantPost";
import ChangedBox from "./ComponentLogic/TransformedBoxComponent";
import ProductBoxes from "./ComponentLogic/ProductTierLogic";

export default function App() {
  const [apiResponse, setapiResponse] = useState({});
  const [storeApiResponse, storeSetApiResponse] = useState({});
  //const [isEnoughKYC, setIsEnoughKYC] = useState(false);
  const isEnoughKYC = apiResponse.verified && storeApiResponse.verified;
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(apiResponse.comments);

  async function onClick() {
    const response = await PostCompanyGP(payloadValue);
    if (response == true) {
      setIsRegistered(true);
    }
  }

  useEffect(async () => {
    setapiResponse(await PostCompany(payloadValue));
  }, []);

  useEffect(async () => {
    storeSetApiResponse(await PostStore(payloadValue));
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        {isRegistered ? (
          <ChangedBox></ChangedBox>
        ) : (
          <>
            <SimpleGrid columns={[1, 2]} gap="5">
              <Box fontSize="22">Merchant KYC</Box>
              <Box fontSize="22">Store KYC</Box>
            </SimpleGrid>
            <SimpleGrid columns={[1, 2]} gap="5">
              <Box p={4} bg="teal.100" borderRadius="lg" boxShadow="xl">
                <List>
                  {apiResponse.comments?.map((line) => (
                    <ListItem key={line}>
                      {" "}
                      <Box
                        p={1}
                        fontSize="15"
                        bg="red.50"
                        borderRadius="lg"
                        margin="0.5"
                      >
                        <ListIcon as={BsDashCircleFill} color="red" />
                        {line}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box p={4} bg="teal.100" borderRadius="lg" boxShadow="xl">
                <List>
                  {storeApiResponse?.comments?.slice(0, 5).map((line) => (
                    <ListItem key={line}>
                      <Box
                        p={1}
                        fontSize="15"
                        bg="red.50"
                        borderRadius="lg"
                        margin="0.5"
                      >
                        <ListIcon as={BsDashCircleFill} color="red" />
                        {line}
                      </Box>
                    </ListItem>
                  ))}
                </List>
                {storeApiResponse.comments?.length > 5 && (
                  <Box>
                    And {storeApiResponse.comments.length - 5} more fields
                  </Box>
                )}
              </Box>
            </SimpleGrid>
            <Center mt={8}>
              {!isEnoughKYC ? (
                <Box bg="red" borderRadius="lg" p={2}>
                  KYC not completed
                </Box>
              ) : (
                <Button onClick={onClick} colorScheme="teal">
                  Can Register!
                </Button>
              )}
            </Center>
          </>
        )}
      </Container>
      <ProductBoxes></ProductBoxes>
    </ChakraProvider>
  );
}

const payloadValue = {
  SessionID:
    "00D26000000GRC6!AQQAQEJl3dO1I8Hndjq59MLchI9dIjYkmvguXmjwEbAXaS3nnAcCgXvyV7A3_455nwqmcUfFHWV6ZURQFJADAsouEyPyTkCD",
  OpportunityID: "0062600000J9z6GAAR"
};
