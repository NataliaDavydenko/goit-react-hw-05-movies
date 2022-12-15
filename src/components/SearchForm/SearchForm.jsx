import PropTypes from 'prop-types';
import { Form } from './SearchElem.styled';

export const SearchForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};