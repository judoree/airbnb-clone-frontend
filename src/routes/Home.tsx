import { FaStar, FaRegHeart } from "react-icons/fa";
import { Box, Button, Grid, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3,1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5,1fr)",
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        base: "1fr",
        lg: "repeat(5,1fr)",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, , 4, 4, 4].map((index) => (
        <Room key={index} />
      ))}
    </Grid>
  );
}
