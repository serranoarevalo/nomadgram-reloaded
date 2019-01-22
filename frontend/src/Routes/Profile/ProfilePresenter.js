import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import Wrapper from "../../Components/Wrapper";
import Bold from "../../Components/Bold";
import PhotoGrid from "../../Components/PhotoGrid";

const SWrapper = styled(Wrapper)`
  width: 45%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

const HeaderColumn = styled.div`
  margin-left: 100px;
`;

const Username = styled.span`
  font-size: 28px;
  font-weight: 300;
`;

const Metrics = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const Metric = styled.span`
  &:not(:first-child) {
    margin-left: 45px;
  }
`;

const Fullname = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
  font-weight: 500;
`;

const Bio = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Url = styled.a`
  font-size: 14px;
  color: ${props => props.theme.darkBlueColor};
  font-weight: 600;
`;

const ProfilePresenter = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  } else if (!loading && data) {
    const {
      userProfile: { user }
    } = data;
    return (
      <>
        <SWrapper>
          <Header>
            <Avatar size="lg" url={user.profile.avatar} />
            <HeaderColumn>
              <Username>{user.username}</Username>
              <Metrics>
                <Metric>
                  <Bold text={String(user.profile.postCount)} /> posts
                </Metric>
                <Metric>
                  <Bold text={String(user.profile.followersCount)} /> followers
                </Metric>
                <Metric>
                  <Bold text={String(user.profile.followingCount)} /> following
                </Metric>
              </Metrics>
              <Fullname>{`${user.firstName} ${user.lastName}`}</Fullname>
              {user.profile.bio && <Bio>{user.profile.bio}</Bio>}
              {user.profile.website && <Url>{user.profile.website}</Url>}
            </HeaderColumn>
          </Header>
        </SWrapper>
        <Wrapper>
          {user.images && user.images.length !== 0 && (
            <PhotoGrid images={user.images} />
          )}
        </Wrapper>
      </>
    );
  }
  return null;
};

ProfilePresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default ProfilePresenter;
