import styled from 'styled-components';
import { Color } from '@web/styles/models';

export const ItemCardShell = styled.div`
  height: 386px;
  width: 510px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background-color: ${Color.Tint400};
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
    transform: translateY(-6px);
    transition: transform 200ms;
  }
`;

export const CardImageContainer = styled.div`
  height: 366px;
`;

export const CardImage = styled.img`
  height: 366px;
  width: auto;
  object-fit: cover;
`;

export const ItemInfoContainer = styled.div`
  height: 366px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  flex-wrap: wrap;
`;

export const CardTitle = styled.h3`
  font-family: 'Raleway', serif;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  color: ${Color.Text};
  text-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
  max-width: 90%;
`;

export const SetImage = styled.img`
  height: 60px;
  width: auto;
  margin-top: 10px;
  object-fit: cover;
`;
