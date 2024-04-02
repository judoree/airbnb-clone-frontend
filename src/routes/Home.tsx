import { FaStar, FaRegHeart } from "react-icons/fa";
import { Box, Grid, Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3 , 1fr)",
        xl: "repeat(4 , 1fr)",
        "2xl": "repeat(5 , 1fr)",
      }}
    >
      {[1, 2, 3, 4, 2, 3, 2, 32, 31, 23, 1, 23, 12, 3, 12, 31, 23].map((index) => (
        <Room key={index} />
      ))}
    </Grid>
  );
}
