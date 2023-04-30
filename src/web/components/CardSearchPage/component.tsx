import React from 'react';
import {
  CardSearchPageContainer,
  CardSearchButton,
  CardSearchInput,
  CardSearchUtilityBar,
  SearchBarContainer,
  SortBarContainer,
} from './views';
import { ToggleSort } from '../ToggleSort';

export function CardSearchPageComponent() {
  return (
    <CardSearchPageContainer>
      <CardSearchUtilityBar>
        <SortBarContainer>
          <ToggleSort />
        </SortBarContainer>
        <SearchBarContainer>
          <CardSearchInput />
          <CardSearchButton>Search</CardSearchButton>
        </SearchBarContainer>
      </CardSearchUtilityBar>
    </CardSearchPageContainer>
  );
}
