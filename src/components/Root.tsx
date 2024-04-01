import {
  Box,
  Button,
  HStack,
  IconButton,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUserNinja, FaLock } from "react-icons/fa";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
        <Box color="red.500">
          <Link to={"/"}>
            <FaAirbnb size={"48"} />
          </Link>
        </Box>
        <HStack spacing={2}>
          <IconButton variant={"ghost"} aria-label="Toggle dark mode" icon={<FaMoon />} />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement children={<FaUserNinja />} />
                  <Input variant={"filled"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={<FaLock />} />
                  <Input variant={"filled"} placeholder="password" />
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme="red" w="100%">
                Log in
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
