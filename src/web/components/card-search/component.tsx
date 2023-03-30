import React from 'react';
import {
  CardSearchPageContainer,
  CardSearchButton,
  CardSearchInput,
  CardSearchLabel,
  CardSearchContainer,
  CardSearchContainerInnerRow,
} from './views';

export function CardSearchPageComponent() {
  return (
    <CardSearchPageContainer>
      <CardSearchContainer>
        <CardSearchLabel>Search Pokemon Trading Cards</CardSearchLabel>
        <CardSearchContainerInnerRow>
          <CardSearchInput />
          <CardSearchButton>Search</CardSearchButton>
        </CardSearchContainerInnerRow>
      </CardSearchContainer>
    </CardSearchPageContainer>
  );
}
