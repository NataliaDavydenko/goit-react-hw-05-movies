import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  font-size: 16px;
  align-items: center;
  column-gap: 10px;
`;

export const MovieBox = styled.div`
  display: flex;
  padding: 30px;
  border-bottom: solid 1px grey;
`;

export const MovieInfo = styled.div`
  padding: 20px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;

  &:hover {
    background-color: rgba(195, 195, 195, 0.36);
  }
`;
