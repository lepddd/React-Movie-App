import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Box = styled.div`
  scroll-behavior: smooth;
  overflow: auto;
  display: flex;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e5e5e5;
    border-radius: 99px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 99px;
  }
`;
const BoxContainer = styled.div`
  width: 100%;
  position: relative;
`;

const BackDrop = styled(motion.div)`
  background: linear-gradient(90deg, rgba(244, 244, 244, 0) 93%, #f4f4f4 98%);
  width: 100%;
  height: calc(100% - 8px);
  position: absolute;
  z-index: 999;
  pointer-events: none;
  transition: 0.5s ease-in-out;
`;

const GradientBox = ({ children }) => {
  const control = useAnimation();

  function changeBackdrop(e) {
    const scrollValue = e.target.scrollLeft;
    const scrollLength = e.target.scrollWidth - e.target.offsetWidth;
    if (scrollValue < scrollLength - 10) {
      return {
        background:
          "linear-gradient(90deg, rgba(244, 244, 244, 0) 93%, #F4F4F4 98%)",
        transition: { duration: 0.5 },
      };
    } else {
      return {
        background:
          "linear-gradient(90deg, rgba(244, 244, 244, 0) 100%, #F4F4F4 100%)",
        transition: { duration: 0.5 },
      };
    }
  }

  return (
    <BoxContainer>
      <BackDrop as={motion.div} animate={control} />
      <Box
        onScroll={(e) => {
          control.start(changeBackdrop(e));
        }}
      >
        {children}
      </Box>
    </BoxContainer>
  );
};
export default GradientBox;
