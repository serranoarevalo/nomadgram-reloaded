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
  max-width: 100%;
  min-width: 100%;
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

const DetailContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  height: 600px;
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
  ${Image} {
    min-width: 0%;
    width: 550px;
  }
  ${Comments} {
    min-height: 50%;
    overflow: scroll;
    margin-bottom: 30px;
  }
`;

const PhotoPresenter = ({
  inline = false,
  creatorAvatar,
  creatorUsername,
  location,
  photoUrl,
  likeCount,
  caption,
  createdAt,
  comments,
  updateNewComment,
  newComment,
  isLiked,
  onLikeClick,
  selfComments,
  onKeyUp
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
        <Image src={photoUrl} />
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
        <Image src={photoUrl} />
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
  onKeyUp: PropTypes.func.isRequired
};

export default PhotoPresenter;
