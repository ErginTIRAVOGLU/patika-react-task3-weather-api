import "./App.css";

import Container from "./components/Container";
import { SehirProvider } from "./context/SehirContext";

function App() {
  return (
    <SehirProvider>
      <Container />
    </SehirProvider>
  );
}

export default App;
