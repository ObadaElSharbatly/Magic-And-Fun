import "./App.css";
import Nav from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
