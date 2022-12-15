import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { IconBtn} from './SearchElem.styled';
import { SearchInput } from './SearchInput';
import { SearchForm } from './SearchForm';

export const SearchBar = ({ onSubmit }) => {
  return (<div>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <IconBtn type="submit">
        <BiSearchAlt/>
      </IconBtn>
    </SearchForm>
  </div>);
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
