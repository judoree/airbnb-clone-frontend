import {
  Box,
  Container,
  FormControl,
  Heading,
  VStack,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import useHostOnlyPage from "../components/HostOnlyPage";
import HostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { FaBed, FaToilet } from "react-icons/fa";

export default function UploadRoom() {
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
          <VStack spacing={5} as="form" mt={5}>
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
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
