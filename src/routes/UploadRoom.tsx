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
  Text,
  useToast,
} from "@chakra-ui/react";
import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { FaBed, FaToilet } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAmenities, getCategories, IUploadRoomVariables, uploadRoom } from "../api";
import { IAmenity, ICategory } from "../types";
import { useForm } from "react-hook-form";
// const { data: categories, isLoading: isCategoriesLoading } = useQuery<ICategory>(["categories"], getCategories);

export default function UploadRoom() {
  const { register, handleSubmit } = useForm<IUploadRoomVariables>();
  const toast = useToast();
  const mutation = useMutation(uploadRoom, {
    onSuccess: () => {
      toast({
        status: "success",
        title: "Room create!",
        position: "bottom-right",
      });
    },
  });
  const { data: amenities, isLoading: isAmenitiesLoading } = useQuery<IAmenity[]>(["amenities"], getAmenities); // API 에서 amenitis 가져온 함수
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<ICategory[]>(["categories"], getCategories);
  useHostOnlyPage();
  const onSubmit = (data: IUploadRoomVariables) => {
    mutation.mutate(data);
  };
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
          <VStack spacing={10} as="form" onSubmit={handleSubmit(onSubmit)} mt={5}>
            <FormControl isRequired>
              <FormLabel>Room Name</FormLabel>
              <Input {...(register("name"), { required: true })} focusBorderColor="lime" required type="text" />
              <FormHelperText>Wirte the Name of your room</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Countey</FormLabel>
              <Input {...(register("country"), { required: true })} required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input {...(register("city"), { required: true })} required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input {...(register("address"), { required: true })} required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftAddon children="$USD" />
                <Input {...(register("price"), { required: true })} type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Rooms</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBed />} />
                <Input {...(register("rooms"), { required: true })} type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Toilets</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaToilet />} />
                <Input {...(register("toilets"), { required: true })} type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea {...(register("description"), { required: true })} />
            </FormControl>
            <FormControl>
              <Checkbox {...(register("pet_friendly"), { required: true })}>Pet friendly?</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Kind of room</FormLabel>
              <Select {...(register("kind"), { required: true })} placeholder="Choose a kind">
                <option value="entire_place">Entire Place</option>
                <option value="private_room">Private Room</option>
                <option value="shared_room">Shared Room</option>
              </Select>
              <FormHelperText>What kind of room are you renting?</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select {...(register("category"), { required: true })} placeholder="Choose a kind">
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
                    <Checkbox value={amenity.pk} {...(register("amenities"), { required: true })}>
                      {amenity.name}
                    </Checkbox>
                    <FormHelperText>{amenity.description}</FormHelperText>
                  </Box>
                ))}
              </Grid>
            </FormControl>
            {mutation.isError ? <Text color="led.500">Something went worng</Text> : null}
            <Button type="button" isLoading={mutation.isLoading} size="lg" height="48px" width="100%" border="2px" borderColor="green.500">
              Upload Room
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
