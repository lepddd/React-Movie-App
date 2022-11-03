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
  border: 1px solid #262626;
  border-right: none;
  cursor: pointer;
  background-color: ${(props) => (props.current ? "#262626" : "#EFF6FF")};
  color: ${(props) => (props.current ? "#F4F4F4" : "#27272A")};
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0px 4px 4px 0;
    border: 1px solid #262626;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #262626;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Pagination = ({ currentPage, maxPages, toPage }) => {
  const [numbers, setNumbers] = useState([]);

  const midNumber = currentPage + 2;

  function generatePages(number) {
    setNumbers([number - 2, number - 1, number, number + 1, number + 2]);
  } //fixed to 5 numbers in row of pages

  function goToPage(number, i) {
    let num = number + i;
    if (num >= 3 && num <= maxPages - 2) {
      generatePages(num);
      toPage(num);
    } else if (num < 3) {
      generatePages(3);
      toPage(num);
    } else if (num > maxPages - 2) {
      generatePages(maxPages - 2);
      toPage(num);
    }
  }

  function pPage(index) {
    goToPage(currentPage, index);
  }

  useEffect(() => {
    generatePages(midNumber);
  }, []);

  return (
    <Box>
      <StyledButton onClick={() => pPage(-1)} disabled={currentPage === 1}>
        <Icon icon="ep:arrow-left" color="#f4f4f4" width="15" height="15" />
      </StyledButton>
      <Container>
        {numbers.map((number) => (
          <Number
            current={number === currentPage}
            key={Math.random() * numbers.length}
            onClick={() => goToPage(number, 0)}
          >
            {number}
          </Number>
        ))}
      </Container>
      <StyledButton
        onClick={() => pPage(+1)}
        disabled={currentPage === maxPages}
      >
        <Icon icon="ep:arrow-right" color="#f4f4f4" width="15" height="15" />
      </StyledButton>
    </Box>
  );
};

export default Pagination;
