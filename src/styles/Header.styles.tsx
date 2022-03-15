import { motion } from "framer-motion";
import styled from "styled-components";
export const HeaderComponent = styled.div`
  background: #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e2e2e2;
`;
export const Logo = styled.img`
  width: 150px;
  margin-right: 50px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;
export const Input = styled(motion.input)`
  width: 400px;
  height: 100%;
  border-radius: 4px;
  padding: 0 10px 0 10px;
  font-size: 16px;
  font-family: var(--font-montserrat);
`;
export const SearchButton = styled.button`
  background: var(--color-orange);
  width: 40px;
  height: 100%;
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
  svg {
    width: 60%;
    color: white;
  }
  &:hover {
    background: var(--color-orange-solid);
    cursor: pointer;
  }
`;
