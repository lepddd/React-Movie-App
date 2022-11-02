import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.div`
  height: 25px;
  font-size: 12px;
  padding: 0 10px;
  line-height: 25px;
  border: 1px solid #4338ca;
  border-right: none;
  background-color: ${(props) => (props.current ? "#4338CA" : "#EFF6FF")};
  color: ${(props) => (props.current ? "#F4F4F4" : "#27272A")};
  &:first-child {
    border-radius: 4px 0 0 4px;
    border-right: none;
  }
  &:last-child {
    border-radius: 0px 4px 4px 0;
    border: 1px solid #4338ca;
  }
`;

const StyledButton = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4338ca;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Pagination = ({ currentPage, maxPages, nextPage, prevPage }) => {
  const [numbers, setNumbers] = useState([]);

  const maxNumber = 5;

  const generatePagesNumbers = () => {
    let array = [];
    for (let i = currentPage; i < maxNumber + currentPage; i++) {
      if (i > maxPages) return array;
      array.push(i);
    }
    return array;
  };

  function updateNextPage() {
    //Tira o primeiro elemento e coloca o sucessor do último elemento
    let array = numbers;
    if (numbers[numbers.length - 1] < maxPages) {
      array.shift();
      array.push(numbers[numbers.length - 1] + 1);
      console.log(numbers);
      nextPage();
      setNumbers([...array]);
    }
  }

  function updatePrevPage() {
    //Tira o último elemento e coloca o antecessor do primeiro elemento
    let array = numbers;
    if (numbers[0] > 1) {
      array.pop();
      array.unshift(numbers[0] - 1);
      console.log(numbers);
      prevPage();
      setNumbers([...array]);
    }
  }

  useEffect(() => {
    setNumbers(generatePagesNumbers()); //Gera primeira array no único render
  }, []);

  return (
    <Box>
      <StyledButton
        onClick={() => updatePrevPage()}
        disabled={currentPage === 1}
      >
        <Icon icon="ep:arrow-left" color="#f4f4f4" width="15" height="15" />
      </StyledButton>
      <Container>
        {numbers.map((number) => (
          <Number
            current={number === currentPage}
            key={Math.random() * numbers.length}
          >
            {number}
          </Number>
        ))}
      </Container>
      <StyledButton
        onClick={() => updateNextPage()}
        disabled={currentPage === maxPages}
      >
        <Icon icon="ep:arrow-right" color="#f4f4f4" width="15" height="15" />
      </StyledButton>
    </Box>
  );
};

export default Pagination;
