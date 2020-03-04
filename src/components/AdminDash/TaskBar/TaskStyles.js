import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: #545454;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 24%;
  height: 26.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
`;

export const CardTop = styled.div`
  width: 100%;
`;

export const Number = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;
`;

export const Icon = styled.div`
cursor: pointer;
`;

export const Description = styled.p`
  font-size: 1.4rem;
`;
