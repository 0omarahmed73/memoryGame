import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemoryGame from "./MemoryGame";
import { ImgsProvider } from "./context/ImgsContext";
import Levels from "./pages/Levels";
import MemoryGames from "./pages/MemoryGames";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MemoryGame/>}>
        <Route index element={<Levels/>}/> 
        <Route path='level3' element={<MemoryGames level='3' />}/>
        <Route path='level2' element={<MemoryGames level='2' />}/>
        <Route path='level1' element={<MemoryGames level='1' />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
