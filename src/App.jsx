import MemoryGame from "./MemoryGame";
import { ImgsProvider } from "./context/ImgsContext";

function App() {
  return (
    <>
      <ImgsProvider>
        <MemoryGame />
      </ImgsProvider>
    </>
  );
}

export default App;
