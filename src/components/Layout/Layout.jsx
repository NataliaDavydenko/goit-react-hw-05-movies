import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, HeaderLinks, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <HeaderLinks>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </HeaderLinks>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
