import "./App.css";
import Nav from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/Home";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Home />
    </ChakraProvider>
  );
}

export default App;
