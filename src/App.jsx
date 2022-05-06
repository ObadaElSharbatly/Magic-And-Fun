import Nav from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import GoTop from "./components/GoTop";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <GoTop />
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
