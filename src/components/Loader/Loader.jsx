import { LoaderStyled } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </LoaderStyled>
);

export default Loader;
