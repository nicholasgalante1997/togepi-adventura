import styled from 'styled-components';
import { Color } from '../../styles/models';

export const ToggleContainer = styled.div`
  background-color: ${Color.Tint300};
  width: 72px;
  height: 40px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
`;

export const ToggleSpan = styled.span<{ active?: boolean }>`
  height: 36px;
  width: 36px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? Color.Palette200 : 'inherit')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
