import { Input } from "./SearchElem.styled";

export const SearchInput = () => (
  <Input
    type="text"
    name="movieName"
    required
    autoComplete="off"
    autoFocus
    placeholder="Write movie name"
  />
);