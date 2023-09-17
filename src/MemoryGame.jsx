import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ImgCard from "./components/ImgCard";
import { ImgsContext } from "./context/ImgsContext";

const MemoryGame = () => {
  const {hData , handleAgain} = useContext(ImgsContext);
  return (
    <div className="memorygame">
      <Container fluid={true}>
        <Row>
          {hData && hData.length
            ? hData.map((d) => {
                return <ImgCard key={crypto.randomUUID()} d={d} />;
              })
            : <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="won text-white text-center">Congratulations You Won !🎉🎉</p>
            <Button onClick={handleAgain} className="w-50" variant="danger">Try Again ?</Button>
            </div>}
        </Row>
      </Container>
    </div>
  );
};

export default MemoryGame;
