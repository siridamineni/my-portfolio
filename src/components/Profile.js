import React from 'react';
import styled from 'styled-components';
import { Avatar, Typography } from '@mui/material';
import profile from '../shared/Icons/images/profile.jpg';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

const StyledAvatar = styled(Avatar)`
  && {
    height: 100px;
    width: 100px;
    margin: 50px 0px 10px 40px;
  }
`;

const StyledCaption = styled(Typography)`
  color: black;
  font-family: Roboto;
  font-style: normal;
  padding-top: 10px;
`;
const Profile = () => {
  return (
    <StyledProfile>
      <StyledAvatar src={profile} />
      <StyledCaption variant="h4">
        Transforming visions into reality – I am a web developer on a mission
      </StyledCaption>
    </StyledProfile>
  );
};
export default Profile;
