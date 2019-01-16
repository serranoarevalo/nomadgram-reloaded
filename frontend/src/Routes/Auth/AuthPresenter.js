import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Wrapper from "../../Components/Wrapper";
import LogIn from "../../Components/LogIn";
import SignUp from "../../Components/SignUp";
import PhoneImage from "../../Images/phone.png";

const Container = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 125px;
  max-width: 745px;
`;

const Phone = styled.img`
  max-width: 360px;
`;

const Box = styled.div`
  background-color: white;
  border: ${props => props.theme.boxBorder};
  text-align: center;
`;

const Column = styled.div`
  width: 45%;
`;

const SwitchBox = styled(Box)`
  padding: 30px 0px;
  margin-top: 15px;
`;

const SwitchLink = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const FormBox = styled(Box)`
  padding: 40px;
`;

const FeedPresenter = ({ logIn, changeMode }) => (
  <Container>
    <Phone src={PhoneImage} />
    <Column>
      <FormBox>{logIn ? <LogIn /> : <SignUp />}</FormBox>
      <SwitchBox>
        {logIn ? (
          <>
            Don't have an account?{" "}
            <SwitchLink onClick={changeMode}>Sign up</SwitchLink>
          </>
        ) : (
          <>
            Have an account?{" "}
            <SwitchLink onClick={changeMode}>Log in</SwitchLink>
          </>
        )}
      </SwitchBox>
    </Column>
  </Container>
);

FeedPresenter.propTypes = {
  logIn: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired
};

export default FeedPresenter;
