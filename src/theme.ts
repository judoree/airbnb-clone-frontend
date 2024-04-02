import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// ThemeConfig 쓰면 TS 에서 자동완성 기능 사용 가능
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;

//  이렇게 테마 지정후 index에도 theme 을 써줘야함
