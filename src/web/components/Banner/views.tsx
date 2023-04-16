import styled, { keyframes } from 'styled-components';

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

  & > p {
    margin-left: 6px;
    font-size: 16px;
    line-height: 1.15;
    display: inline-block;

    & > a {
      font-size: 16px;
      line-height: 1.15;
      display: inline-block;
      cursor: pointer;
      margin-left: 8px;

      &:hover {
        font-size: 18px;
        color: ${(props) => props.hoverColor};
      }
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
