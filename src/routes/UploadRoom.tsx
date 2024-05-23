import {
  Box,
  Container,
  FormControl,
  Grid,
  Heading,
  VStack,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  Textarea,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { FaBed, FaToilet } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAmenities, getCategories } from "../api";
import { IAmenity, ICategory } from "../types";
// const { data: categories, isLoading: isCategoriesLoading } = useQuery<ICategory>(["categories"], getCategories);

export default function UploadRoom() {
  const { data: amenities, isLoading: isAmenitiesLoading } = useQuery<IAmenity[]>(["amenities"], getAmenities); // API 에서 amenitis 가져온 함수
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<ICategory[]>(["categories"], getCategories);
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <Box
        pb={40}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <Container>
          <Heading textAlign={"center"}>Upload Room</Heading>
          <VStack spacing={10} as="form" mt={5}>
            <FormControl isRequired>
              <FormLabel>Room Name</FormLabel>
              <Input focusBorderColor="lime" required type="text" />
              <FormHelperText>Wirte the Name of your room</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Countey</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftAddon children="$USD" />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Rooms</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBed />} />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Toilets</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaToilet />} />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <Checkbox>Pet friendly?</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Kind of room</FormLabel>
              <Select placeholder="Choose a kind">
                <option value="entire_place">Entire Place</option>
                <option value="private_room">Private Room</option>
                <option value="shared_room">Shared Room</option>
              </Select>
              <FormHelperText>What kind of room are you renting?</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Choose a kind">
                {categories?.map((category) => (
                  <option key={category.pk} value={category.pk}>
                    {category.name}
                  </option>
                ))}
              </Select>
              <FormHelperText>What category describes your room?</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Amenities</FormLabel>
              <Grid templateColumns={"1fr 1fr"} gap={5}>
                {amenities?.map((amenity) => (
                  <Box key={amenity.pk}>
                    <Checkbox>{amenity.name}</Checkbox>
                    <FormHelperText>{amenity.description}</FormHelperText>
                  </Box>
                ))}
              </Grid>
            </FormControl>
            <Button size="lg" height="48px" width="100%" border="2px" borderColor="green.500">
              Upload Room
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
