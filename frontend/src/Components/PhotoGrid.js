import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SquareImage from "./SquareImage";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 295px);
  grid-auto-rows: 295px;
`;

const PhotoGrid = ({ images, className }) => (
  <Container className={className}>
    {images.map(image => (
      <SquareImage
        key={image.id}
        id={image.id}
        file={image.file}
        likeCount={image.likeCount}
        commentCount={image.commentCount}
      />
    ))}
  </Container>
);

PhotoGrid.propTypes = {
  images: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default PhotoGrid;
