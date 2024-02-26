import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* provider는 자동으로 자신의 모든 childeren내부에 모든 설정과 구성 사항들을 포함 */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
