import { Color } from '@web/styles/models';
import styled, { css } from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 72px);
  width: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
`;

export const AuthColumn = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background-color: ${Color.Base};
`;

export const AuthHeading = styled.h2`
  font-size: 36px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  color: ${Color.Text};
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.5), 0px 0px 12px ${Color.Palette200};
`;

export const AuthTabBar = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 60px;
  border-radius: 30px;
  background-color: ${Color.Tint300};
  overflow: hidden;
`;

export const AuthTab = styled.span<{ active?: boolean }>`
  width: 200px;
  height: 60px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.active ? Color.Palette300 : 'inherit')};
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    font-size: 20px;
    text-decoration: underline;
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.5), 0px 0px 12px ${Color.Palette200};
  }
`;

export const InputBlock = styled.div`
  margin: 10px 0px;
  padding: 2px 0px;
  height: 60px;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 1.15;
  color: white;
`;

export const ImageColumn = styled.div`
  height: 100%;
  width: 50%;
  padding: 12px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 600px;
  height: auto;
`;
