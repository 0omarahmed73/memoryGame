import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { ImgsContext } from "../context/ImgsContext";
import LazyLoad from "react-lazy-load";

const ImgCard = ({ d }) => {
  const { handleFlip } = useContext(ImgsContext);
  return (
    <>
      <Col
        className="m-2"
        xs="5"
        sm="4"
        md="3"
        lg="2"
        onClick={() => handleFlip(d.id)}
        key={crypto.randomUUID()}
      >
        <div className="img">
          {d.flip ? (
            <LazyLoad>
              <img src={d.img} alt="" />
            </LazyLoad>
          ) : (
            <LazyLoad height="100%">
              <img src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg" />
            </LazyLoad>
          )}
        </div>
      </Col>
    </>
  );
};

export default ImgCard;
