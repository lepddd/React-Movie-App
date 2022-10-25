import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 5px;
  bottom: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #164e63;
  border-radius: 50%;
`;

const Percentage = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
  border-radius: 50%;
  transform: rotate(270deg);
`;

const StyledSvg = styled.svg`
  position: relative;
  width: 28px;
  height: 28px;
`;

const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: 2;
  stroke-dasharray: 750;
  stroke-dashoffset: calc(750 - (750 * ${(props) => props.val}) / 100);
  transform: translate(2px, 2px);
`;

const VoteAvg = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 12px;
  color: #f4f4f4;
`;

const ProgressBar = ({ value }) => {
  const colors = {
    high: "#10b981",
    medium: "#eab308",
    low: "#ef4444",
  };

  const [color, setColor] = useState("");

  function strokeColor(num) {
    if (num >= 6) {
      setColor(colors.high);
      return;
    }
    if (num >= 3) {
      setColor(colors.medium);      
      return;
    }
    if (num >= 0) {
      setColor(colors.low);
      return;
    }
  }

  useEffect(() => {
    strokeColor(value);
  },[]);

  return (
    <Container>
      <Percentage>
        <StyledSvg>
          <Circle cx="12" cy="12" r="12" stroke={`${color}`} val={value} />
        </StyledSvg>
      </Percentage>
      <VoteAvg>{value}</VoteAvg>
    </Container>
  );
};

export default ProgressBar;
