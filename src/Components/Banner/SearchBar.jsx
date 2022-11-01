import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

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
  background-image: linear-gradient(90deg, #6c757d 0%, #a3a3a3 100%);
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

  function changeInput(e) {
    setInput((prevState) => e.target.value);
  }

  function SearchMovie() {
    if (input) {
      const searchMovie = input
        .replace(":", "")
        .toLowerCase()
        .split(" ")
        .join("+");

      navigate(`/search/${searchMovie}`);
    }
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
          backgroundImage:
            "linear-gradient(90deg, #6C757D  100%, #A3A3A3 100%)",
        }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        Search
      </SearchBtn>
    </InputContainer>
  );
};
export default SearchBar;
