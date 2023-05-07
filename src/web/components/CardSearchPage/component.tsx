import React from 'react';
import {
  CardSearchButton,
  CardSearchInput,
  CardSearchPageContainer,
  CardSearchUtilityBar,
  SearchBarContainer,
  SortBarContainer,
} from './views';
import { ToggleSort } from '@web/components/ToggleSort';

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
