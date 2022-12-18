import { Input } from "./SearchElem.styled";

const SearchInput = () => (
  <Input
    type="text"
    name="movieName"
    required
    autoComplete="off"
    autoFocus
    placeholder="Write movie name"
  />
);

export default SearchInput;