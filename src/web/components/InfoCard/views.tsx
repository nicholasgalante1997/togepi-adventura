import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 364px;
  width: 288px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  cursor: pointer;
`;

export const CardImageContainer = styled.div`
  height: 364px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  height: 364px;
  width: auto;
  object-fit: cover;
  object-position: center;
`;

export const CardInfoContainer = styled.div`
  height: 356px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 8px;
  padding-top: 8px;
`;

export const CardTitle = styled.h4``;
