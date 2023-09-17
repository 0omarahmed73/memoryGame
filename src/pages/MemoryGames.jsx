import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { ImgsContext } from "../context/ImgsContext";
import ImgCard from "../components/ImgCard";
import { Navigate, useNavigate } from "react-router-dom";

const MemoryGames = ({level}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const { hData, handleAgain, level : le2 , handleSetLevel } =
    useContext(ImgsContext);
  const isMount = useRef(false);
  useEffect(() => {
    setInterval(() => {
      if (!isMount.current) {
        setLoading(true)
        handleSetLevel(level)
        isMount.current = true
        setLoading(false)
      }
    } , 3000)
  }, [handleSetLevel, le2, level, setLoading]);
  return (
    <>
      <Container fluid={true} className="flex-column">
          {!loading && hData.length ? <Button onClick={() => navigate('/')} className="w-auto me-auto ms-sm-5 mb-2">Go back</Button> : ''}
        <Row>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : hData && hData.length ? (
            hData.map((d) => {
              return <ImgCard key={crypto.randomUUID()} d={d} />;
            })
          ) : !loading && !hData.length ? (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="won text-white text-center">
                Congratulations You Won !🎉🎉
              </p>
              <Button onClick={handleAgain} className="w-50" variant="danger">
                Try Again ?
              </Button>
            </div>
          ) : ''}
        </Row>
      </Container>
    </>
  );
};

export default MemoryGames;
