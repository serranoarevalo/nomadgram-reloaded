import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import AutoHeightImage from "react-native-auto-height-image";
import Avatar from "../Avatar";
import BoldText from "../BoldText";
import Text from "../Text";
import { Colors, Layout } from "../../constants";

const Header = styled.View`
  margin-top: 10px;
  flex-direction: row;
  padding-horizontal: 15px;
  padding-bottom: 10px;
  align-items: center;
`;

const HeaderColumn = styled.View`
  margin-left: 10px;
`;

const SlideContainer = styled.View``;

const SlideImage = styled.Image`
  width: ${Layout.width};
`;

const FeedPhotoPresenter = ({
  creatorAvatar,
  creatorUsername,
  location,
  files,
  updateHeight,
  currentSlideHeight
}) => (
  <>
    <Header>
      <Avatar url={creatorAvatar} size="sm" />
      <HeaderColumn>
        <BoldText text={creatorUsername} />
        <Text text={location} small />
      </HeaderColumn>
    </Header>
    <Swiper
      showsButtons={false}
      style={{ height: currentSlideHeight }}
      showsPagination={false}
    >
      {files.map(file => (
        <SlideContainer key={file.id}>
          <AutoHeightImage
            width={Layout.width}
            source={{ uri: file.url }}
            resizeMode="contain"
            onHeightChange={updateHeight}
          />
        </SlideContainer>
      ))}
    </Swiper>
  </>
);

FeedPhotoPresenter.propTypes = {
  creatorAvatar: PropTypes.string.isRequired,
  creatorUsername: PropTypes.string.isRequired,
  location: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeTap: PropTypes.func.isRequired,
  updateHeight: PropTypes.func.isRequired,
  currentSlideHeight: PropTypes.number.isRequired
};

export default FeedPhotoPresenter;
