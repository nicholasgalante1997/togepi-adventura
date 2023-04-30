import { Card } from '@nickgdev/larvitar-types';
import React from 'react';

type CardSearchContextType = {
  searchTerm?: string;
  mutateSearchTerm: React.ChangeEventHandler<HTMLInputElement>;
  visibleCards: Card[];
};

const def = {
  mutateSearchTerm: function (e) {},
  visibleCards: [],
} as CardSearchContextType;

const CardSearchContext = React.createContext(def);

type CardSearchProviderProps = {
  cards: Card[];
  children?: React.ReactNode | JSX.Element;
};

export const CardSearchProvider: React.FunctionComponent<CardSearchProviderProps> = (props) => {
  const [allCards, setAllCards] = React.useState(props.cards);
  const [visibleCards, setVisibleCards] = React.useState();
  const [searchTerm, setSearchTerm] = React.useState('');
  function mutateSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }
  const memoProviderValues = React.useMemo(() => ({}), [searchTerm]);
  return <CardSearchContext.Provider value={}>{props.children};</CardSearchContext.Provider>;
};
