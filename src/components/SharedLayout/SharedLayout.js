import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
// import css from './SharedLayout.module.css'
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  /* color: black; */

  font-size: 28px;
  :first-child {
    margin-right: 20px;
  }
  &.active {
    color: #dc143c;
  }
`;
const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width:100vw;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #87cefa;
  /* background-color: #3f51b5; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const ContainerHome = styled.div`
  /* background-color: #f0f8ff; */
  /* max-width: 1280px; */
  height:100%;
`;
const ContainerContent = styled.div`
display: flex;
align-items: center;
padding-top: 110px;
height: 100%;

`

const SharedLayout = () => {
  return (
    <ContainerHome>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <ContainerContent>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ContainerContent>
    </ContainerHome>
  );
};
export default SharedLayout;