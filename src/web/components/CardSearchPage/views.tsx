import styled from 'styled-components';
import { Color } from '../../styles/models';

export const CardSearchPageContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${Color.Base};
  color: ${Color.Text};
`;

export const CardSearchUtilityBar = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${Color.Tint200};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-top: 4px;
  padding-bottom: 2px;
`;

export const SortBarContainer = styled.div`
  min-width: 430px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  min-width: 430px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardSearchLabel = styled.label`
  line-height: 1.5;
  font-size: 16px;
  font-weight: 700;
`;

export const CardSearchInput = styled.input`
  &::placeholder {
    color: rgba(0, 0, 0, 5);
  }
`;

export const CardSearchButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 6px;
  height: 30px;
  cursor: pointer;
  background-color: inherit;
  color: ${Color.Text};
  font-family: 'Poppins';
`;

export const CardSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;
  height: 200px;
  justify-content: space-evenly;
`;
