import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Textarea from "react-expanding-textarea";
import Avatar from "../Avatar";
import Bold from "../Bold";
import Comment from "../Comment";
import PhotoButtons from "../PhotoButtons";

const Container = styled.div`
  background-color: white;
  border: ${props => props.theme.boxBorder};
  border-radius: 3px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const HeaderColumn = styled.div`
  margin-left: 15px;
`;

const Location = styled.span`
  margin-top: 5px;
  display: block;
  font-size: 12px;
`;

const Image = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  opacity: ${props => (props.selected ? "1" : "0")};
  transition: opacity 0.5s linear;
`;

const Meta = styled.div`
  padding: 10px 15px;
  padding-bottom: 0;
  background-color: white;
`;

const Comments = styled.div`
  margin-top: 10px;
`;

const AddComment = styled.div`
  border-top: 1px solid #efefef;
  margin-top: 10px;
`;

const TimeStamp = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  line-height: 18px;
  margin-top: 10px;
  display: block;
  color: ${props => props.theme.greyColor};
`;

const STextArea = styled(Textarea)`
  width: 100%;
  border: 0;
  resize: none;
  font-size: 14px;
  padding: 15px 0px;
`;

const SliderContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  height: 550px;
  border: ${props => props.theme.boxBorder};
  ${Meta} {
    flex-grow: 1;
    padding: 20px;
    overflow: scroll;
    ${Header} {
      padding: 0;
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #efefef;
    }
  }
  ${SliderContainer} {
    min-width: 0%;
    width: 550px;
    padding-bottom: 0;
  }
  ${Comments} {
    min-height: 50%;
    overflow: scroll;
    margin-bottom: 30px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 26px;
  top: 50%;
  cursor: pointer;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const renderImages = (currentSlide, files, onNextClick, onPreviousClick) => (
  <SliderContainer>
    <LeftArrow onClick={onPreviousClick}>
      <span role="img" aria-label="previous">
        👈🏻
      </span>
    </LeftArrow>
    {files.map(file => (
      <Image
        src={file.url}
        key={file.id}
        selected={files.indexOf(file) + 1 === currentSlide}
      />
    ))}
    <RightArrow onClick={onNextClick}>
      <span role="img" aria-label="next">
        👉🏻
      </span>
    </RightArrow>
  </SliderContainer>
);

const PhotoPresenter = ({
  inline = false,
  creatorAvatar,
  creatorUsername,
  location,
  files,
  likeCount,
  caption,
  createdAt,
  comments,
  updateNewComment,
  newComment,
  isLiked,
  onLikeClick,
  selfComments,
  onKeyUp,
  currentSlide,
  onNextClick,
  onPreviousClick
}) => {
  if (inline) {
    return (
      <Container>
        <Header>
          <Link to={`/${creatorUsername}`}>
            <Avatar size="sm" url={creatorAvatar} />
          </Link>
          <HeaderColumn>
            <Link to={`/${creatorUsername}`}>
              <Bold text={creatorUsername} />
            </Link>
            <Location>{location}</Location>
          </HeaderColumn>
        </Header>
        {renderImages(currentSlide, files, onNextClick, onPreviousClick)}
        <Meta>
          <PhotoButtons isLiked={isLiked} onClick={onLikeClick} />
          <Bold text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
          <Comments>
            <Comment username={creatorUsername} comment={caption} />
            {comments &&
              comments.map(comment => (
                <Comment
                  id={comment.id}
                  key={comment.id}
                  username={comment.creator.username}
                  comment={comment.message}
                />
              ))}
            {selfComments &&
              selfComments.map(comment => (
                <Comment
                  id={comment.id}
                  key={comment.id}
                  username={comment.username}
                  comment={comment.message}
                />
              ))}
          </Comments>
          <TimeStamp>{createdAt}</TimeStamp>
          <AddComment>
            <STextArea
              placeholder="Add a comment..."
              onChange={updateNewComment}
              value={newComment}
              onKeyUp={onKeyUp}
            />
          </AddComment>
        </Meta>
      </Container>
    );
  } else {
    return (
      <DetailContainer>
        {renderImages(currentSlide, files, onNextClick, onPreviousClick)}
        <Meta>
          <Header>
            <Link to={`/${creatorUsername}`}>
              <Avatar size="md" url={creatorAvatar} />
            </Link>
            <HeaderColumn>
              <Link to={`/${creatorUsername}`}>
                <Bold text={creatorUsername} />
              </Link>
              <Location>{location}</Location>
            </HeaderColumn>
          </Header>
          <Comments>
            <Comment username={creatorUsername} comment={caption} />
            {comments &&
              comments.map(comment => (
                <Comment
                  id={comment.id}
                  key={comment.id}
                  username={comment.creator.username}
                  comment={comment.message}
                />
              ))}
            {selfComments &&
              selfComments.map(comment => (
                <Comment
                  id={comment.id}
                  key={comment.id}
                  username={comment.username}
                  comment={comment.message}
                />
              ))}
          </Comments>
          <PhotoButtons isLiked={isLiked} onClick={onLikeClick} />
          <Bold text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
          <TimeStamp>{createdAt}</TimeStamp>
          <AddComment>
            <STextArea
              placeholder="Add a comment..."
              onChange={updateNewComment}
              value={newComment}
              onKeyUp={onKeyUp}
            />
          </AddComment>
        </Meta>
      </DetailContainer>
    );
  }
};

PhotoPresenter.propTypes = {
  newComment: PropTypes.string.isRequired,
  updateNewComment: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  selfComments: PropTypes.array,
  onKeyUp: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired
};

export default PhotoPresenter;
