import styled from "styled-components";
import BoxTitle from "../../BoxTitle/BoxTitle";
import { motion } from "framer-motion";
import { animation, transition } from "../../../placeholderAnimation";

const Box = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;

const BoxContent = styled.div`
  padding: 5px;
  height: 100%;
  width: 157px;
  height: 335px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled(motion.div)`
  width: 100%;
  height: 19px;
  background-color: #d4d4d4;
  border-radius: 4px;
`;

const Values = styled(motion.div)`
  width: 100%;
  height: 19px;
  background-color: #d4d4d4;
  border-radius: 4px;
`;

const SkelDetails = () => {
  return (
    <Box>
      <BoxTitle title={"Details"} />
      <BoxContent>
        <Section>
          <Title as={motion.div} animate={animation} transition={transition} />
          <Values as={motion.div} animate={animation} transition={transition} />
        </Section>

        <Section>
          <Title as={motion.div} animate={animation} transition={transition} />
          <Values as={motion.div} animate={animation} transition={transition} />
        </Section>

        <Section>
          <Title as={motion.div} animate={animation} transition={transition} />
          <Values as={motion.div} animate={animation} transition={transition} />
        </Section>

        <Section>
          <Title as={motion.div} animate={animation} transition={transition} />
          <Values as={motion.div} animate={animation} transition={transition} />
        </Section>
      </BoxContent>
    </Box>
  );
};

export default SkelDetails;
