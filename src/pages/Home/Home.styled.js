import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 40px;
  margin-bottom:0;
`;
export const MovieList = styled.ul`
  padding: 26px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MovieItem = styled(Link)`
  padding: 3px 6px;

  &:hover {
    background-color: rgba(195, 195, 195, 0.36);
  }
`;
