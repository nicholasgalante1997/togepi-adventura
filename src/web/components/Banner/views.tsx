import styled, { keyframes } from 'styled-components';
import { Color } from '../../styles/models';

export type BannerContainerProps = {
  textColor: string;
  backgroundColor: string;
  hoverColor: string;
  withAction?: boolean;
};

export const BannerContainer = styled.div<BannerContainerProps>`
  height: 60px;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  box-sizing: border-box;
  padding: 4px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  text-align: center;

  & > p {
    margin-left: 6px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;

    & > a {
      font-size: 16px;
      line-height: 1.15;
      display: inline-block;
      cursor: pointer;
      margin-left: 8px;
      color: ${Color.Tint100};

      &:hover {
        font-size: 18px;
        color: ${(props) => props.hoverColor};
      }
    }

    & > span {
      padding-top: 4px;
      line-height: 1.15;
      text-align: center;
      margin-left: 10px;
    }
  }
`;

const run = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-240vh);
  }
`;
