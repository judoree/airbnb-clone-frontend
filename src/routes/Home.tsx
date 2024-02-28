import { FaStar } from "react-icons/fa";
import { Box, Grid, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(5,1fr)"}>
      <VStack alignItems={"flex-start"}>
        <Box mb="2" overflow={"hidden"} rounded="3xl">
          <Image h="280" src="https://a0.muscache.com/im/pictures/4d2647ea-be83-4071-9271-0af62f8f75e8.jpg?im_w=720" />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as="b" noOfLines={1} fontSize="md">
              Okcheon-myeon, 한국의 샬레 전체
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color="gray.600">
            Seoul, S. Korea
          </Text>
        </Box>
        <Text color="gray.600" fontSize="sm">
          <Text as="b">$72</Text> /night
        </Text>
      </VStack>
    </Grid>
  );
}
