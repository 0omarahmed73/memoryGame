import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ImgCard from "./components/ImgCard";
import { ImgsContext } from "./context/ImgsContext";
import { Outlet } from "react-router-dom";

const MemoryGame = () => {
  return (
    <div className="memorygame">
        <Outlet/>
    </div>
  );
};

export default MemoryGame;
