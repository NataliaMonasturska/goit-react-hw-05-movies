import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import {
  StyledLinkHeader,
  Header,
  ContainerHome,
  ContainerContent,
  Loader,
} from '../styled';

const SharedLayout = () => {
  return (
    <ContainerHome>
      <Header>
        <nav>
          <StyledLinkHeader to="/">Home</StyledLinkHeader>
          <StyledLinkHeader to="/movies">Movies</StyledLinkHeader>
        </nav>
      </Header>
      <ContainerContent>
        <Suspense
          fallback={
            <Loader>
              <RotatingLines
                strokeColor="#3f51b5"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
              />
            </Loader>
          }
        >
          <Outlet />
        </Suspense>
      </ContainerContent>
    </ContainerHome>
  );
};
export default SharedLayout;
