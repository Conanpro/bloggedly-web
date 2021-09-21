import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Main = styled.main`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  position: fixed;
  padding: 1em;
  bottom: 0px;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <Div>
      <Header />
      <Main>{children}</Main>
    </Div>
  );
};

export default Layout