import styled from "styled-components";
import { motion} from 'framer-motion'
import {animation,transition} from '../../../placeholderAnimation'

const ImgBanner = styled(motion.div)`
  height: 300px;
  width: 100%;
  max-width: 1000px;
  min-width: 260px;
  background-color: #d4d4d4;
  margin: 0 auto;
  border-radius: 4px;
`;

const SkelBanner = () => {
  return <ImgBanner as={motion.div} animate={animation} transition={transition}/>;
};

export default SkelBanner;
