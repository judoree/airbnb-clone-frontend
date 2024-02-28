import { FaRegHeart, FaStar } from "react-icons/fa";
import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position="relative" mb={3} overflow={"hidden"} rounded="3xl">
        <Image minH="280" src="https://a0.muscache.com/im/pictures/4d2647ea-be83-4071-9271-0af62f8f75e8.jpg?im_w=720" />
        <Button variant={"unstyled"} color="white" position="absolute" top={0} right={0}>
          <FaRegHeart size="20px" />
        </Button>
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
        <Text fontSize={"sm"} color={gray}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text color={gray} fontSize="sm">
        <Text as="b">$72</Text> /night
      </Text>
    </VStack>
  );
}
