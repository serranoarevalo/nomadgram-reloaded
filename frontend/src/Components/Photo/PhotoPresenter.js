import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import Username from "../Username";

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

const Meta = styled.div``;

const Caption = styled.div``;

const CaptionText = styled.p``;

export default ({
  inline,
  creatorAvatar,
  creatorUsername,
  location,
  photoUrl,
  likeCount,
  commentCount,
  caption,
  createdAt,
  comments
}) => (
  <Container>
    <Header>
      <Avatar size="sm" url={creatorAvatar} />
      <HeaderColumn>
        <Username username={creatorUsername} />
        <Location>{location}</Location>
      </HeaderColumn>
    </Header>
    <Image src={photoUrl} />
    <Meta>
        <Caption>
            <CaptionText>
            <Username  username={creatorUsername}/>
            {caption{}}
            </CaptionText>
        </Caption>
    </Meta>
  </Container>
);
