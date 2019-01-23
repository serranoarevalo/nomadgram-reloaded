import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import Wrapper from "../../Components/Wrapper";
import Bold from "../../Components/Bold";
import PhotoGrid from "../../Components/PhotoGrid";
import Button from "../../Components/Button";
import FollowBtn from "../../Components/FollowBtn";
import { Gear } from "../../Icons";

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

const UsernameRow = styled.div`
  display: flex;
  ${Username} {
    margin-right: 20px;
  }
`;

const GearContainer = styled.span`
  margin-left: 15px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
`;

const ModalOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalAnimation = keyframes`
  from{
    opacity:0;
    transform:scale(1.1);
  }
  to{
    opacity:1;
    transform:none;
  }
`;

const Modal = styled.div`
  background-color: white;
  width: 30%;
  border-radius: 12px;
  z-index: 5;
  animation: ${ModalAnimation} 0.1s linear;
`;

const ModalLink = styled.div`
  text-align: center;
  min-height: 50px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`;

const ProfilePresenter = ({
  data,
  loading,
  modalOpen,
  toggleModal,
  logUserOut
}) => {
  if (loading) {
    return <Loader />;
  } else if (!loading && data) {
    const {
      userProfile: { user }
    } = data;
    return (
      <>
        {modalOpen && (
          <ModalContainer>
            <ModalOverlay onClick={toggleModal} />
            <Modal>
              <ModalLink onClick={logUserOut}>Log Out</ModalLink>
              <ModalLink onClick={toggleModal}>Cancel</ModalLink>
            </Modal>
          </ModalContainer>
        )}
        <SWrapper>
          <Header>
            <Avatar size="lg" url={user.profile.avatar} />
            <HeaderColumn>
              <UsernameRow>
                <Username>{user.username}</Username>
                {user.profile.isSelf ? (
                  <>
                    <Link to="/edit-profile">
                      <Button text="Edit Profile" inverted={true} active />
                    </Link>
                    <GearContainer onClick={toggleModal}>
                      <Gear />
                    </GearContainer>
                  </>
                ) : (
                  <FollowBtn
                    isFollowing={user.profile.isFollowing}
                    userId={user.id}
                  />
                )}
              </UsernameRow>
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
  loading: PropTypes.bool.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  logUserOut: PropTypes.func.isRequired
};

export default ProfilePresenter;
