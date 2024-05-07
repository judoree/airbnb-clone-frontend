import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import {
  Box,
  Button,
  HStack,
  Stack,
  IconButton,
  useColorMode,
  useDisclosure,
  LightMode,
  useColorModeValue,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Toast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const onLogOut = async () => {
    // const data = await logOut();
    const tostId = toast({
      title: "Login out ",
      description: "Bye Bye",
      status: "loading",
      position: "bottom-right",
    });
    toast.update(tostId, {
      status: "success",
      title: "로그 아웃 완료!",
      description: "Bye Bye",
    });
  };

  return (
    <Stack
      justifyContent={"space-between"}
      py={5}
      alignItems="center"
      px={40}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        md: 4,
        sm: 0,
      }}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={2}>
        <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle dark mode" icon={<Icon />} />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user?.name} src={user?.avatar} size={"md"} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
