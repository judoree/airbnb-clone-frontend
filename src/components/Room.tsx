import { FaRegHeart, FaStar } from "react-icons/fa";
import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  pk: number;
}
// 타입 스크립입 쓰므로 타입 알려줘야함
export default function Room({ pk, imageUrl, name, rating, city, country, price }: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    // Link 만드는 code
    <Link to={`/rooms/${pk}`}>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image minH="280" src={imageUrl} />
          <Button variant={"unstyled"} position="absolute" top={0} right={0} color="white">
            <FaRegHeart size="20px" />
          </Button>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
              {name}
            </Text>
            <HStack
              _hover={{
                color: "red.300",
              }}
              spacing={1}
              alignItems="center"
            >
              <FaStar size={12} />
              <Text fontSize={"sm"}>{rating}</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color={gray}>
            {city}, {country}
          </Text>
        </Box>
        <Text fontSize={"sm"} color={gray}>
          <Text as="b">${price}</Text> / night
        </Text>
      </VStack>
    </Link>
  );
}
