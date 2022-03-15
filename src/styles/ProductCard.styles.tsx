import styled from "styled-components";
export const ProductCardWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ProductImageWrapper = styled.div`
  width: 100%;
  img {
    border-radius: 8px;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 15px;
  background-color: var(--color-orange);
  color: white;
  font-family: var(--font-montserrat);
  font-size: 18px;
  border-radius: 5px;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-orange-solid);
  }
`;
