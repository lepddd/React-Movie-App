import styled from "styled-components";
import { ACTION_TYPES } from "../../movieActionTypes";
import { movieReducer, INITIAL_STATES } from "../../useMovies";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  min-width: 220px;
  height: 40px;
  border-radius: 99px;
  border: none;
  padding: 0 2px 0 0;
  background-color: #f4f4f4;
  @media (min-width: 500px) {
    flex-wrap: initial;
  }
`;
const SearchBtn = styled(motion.button)`
  background: #adb5bd;
  border-radius: 99px;
  height: 36px;
  width: 100%;
  color: #f4f4f4;
  font-weight: 800;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  border: 0;
  @media (min-width: 500px) {
    width: fit-content;
    padding: 0 20px;
  }
`;
const StyledInput = styled.input`
  height: 40px;
  min-width: 200px;
  width: 100%;
  font-weight: 400;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  padding: 0 30px;
  border-radius: 99px;
  font-size: 16px;
  color: #a8a29e;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d6d3d1;
  }
`;

const SearchBar = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATES);

  function changeInput(e) {
    console.log(e.target.value);
    setInput((prevState) => (prevState = e.target.value));
  }

  function SearchMovie() {

    const searchMovie = input
      .replace(":", "")
      .toLowerCase()
      .split(" ")
      .join("+");

      navigate(`/search/${searchMovie}`);
    
  }

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="Search movie..."
        onChange={(e) => changeInput(e)}
      />
      <SearchBtn
        onClick={() => SearchMovie()}
        as={motion.button}
        whileHover={{
          backgroundImage: "linear-gradient(270deg, #6C757D  0%, #A3A3A3 100%)",
        }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {state.loading ? "Searching" : "Search"}
      </SearchBtn>
    </InputContainer>
  );
};
export default SearchBar;
