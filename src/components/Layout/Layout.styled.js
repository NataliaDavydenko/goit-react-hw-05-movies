import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  padding: 16px;
  border-bottom: solid 1px grey;
`;

export const HeaderLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px;

  &.active {
    color: red;
  }

  :hover {
    background-color: rgba(195, 195, 195, 0.36);
  }
`;
