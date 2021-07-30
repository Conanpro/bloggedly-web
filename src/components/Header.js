import React from 'react'
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const Header = () => {
    return (
        <HeaderBar>
            <img src="https://logoeps.com/wp-content/uploads/2014/05/49334-blogger-logotype-icon-vector-icon-vector-eps.png" alt="Bloggedly logo" height="40" />
            <LogoText>Bloggedly</LogoText>
        </HeaderBar>
    )
}

export default Header