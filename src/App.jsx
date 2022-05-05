import Nav from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
