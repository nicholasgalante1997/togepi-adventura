/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attack = {
  __typename?: 'Attack';
  convertedEnergyCosts?: Maybe<Scalars['Int']>;
  cost?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Card = {
  __typename?: 'Card';
  artist?: Maybe<Scalars['String']>;
  attacks?: Maybe<Array<Maybe<Attack>>>;
  cardmarket?: Maybe<CardMarket>;
  convertedRetreatCost?: Maybe<Scalars['Int']>;
  hp?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Image>;
  legalities?: Maybe<Legalities>;
  name?: Maybe<Scalars['String']>;
  nationalPokedexNumbers?: Maybe<Array<Maybe<Scalars['Int']>>>;
  number?: Maybe<Scalars['String']>;
  rarity?: Maybe<Scalars['String']>;
  regulationMark?: Maybe<Scalars['String']>;
  resistances?: Maybe<Array<Maybe<Resistance>>>;
  retreatCost?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<CardSet>;
  subtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  supertype?: Maybe<Scalars['String']>;
  tcgplayer?: Maybe<TcgPlayer>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  weaknesses?: Maybe<Array<Maybe<Weakness>>>;
};

export type CardMarket = {
  __typename?: 'CardMarket';
  prices?: Maybe<Price>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CardSet = {
  __typename?: 'CardSet';
  id?: Maybe<Scalars['String']>;
  images?: Maybe<SetImage>;
  legalities?: Maybe<Legalities>;
  name?: Maybe<Scalars['String']>;
  printedTotal?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type GqlHealthCheck = {
  __typename?: 'GqlHealthCheck';
  status?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  large?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
};

export type Legalities = {
  __typename?: 'Legalities';
  expanded?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  unlimited?: Maybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  averageSellPrice?: Maybe<Scalars['Int']>;
  avg1?: Maybe<Scalars['Int']>;
  avg7?: Maybe<Scalars['Int']>;
  avg30?: Maybe<Scalars['Int']>;
  germanProLow?: Maybe<Scalars['Int']>;
  lowPrice?: Maybe<Scalars['Int']>;
  lowPriceExPlus?: Maybe<Scalars['Int']>;
  reverseHoloAvg1?: Maybe<Scalars['Int']>;
  reverseHoloAvg7?: Maybe<Scalars['Int']>;
  reverseHoloAvg30?: Maybe<Scalars['Int']>;
  reverseHoloLow?: Maybe<Scalars['Int']>;
  reverseHoloSell?: Maybe<Scalars['Int']>;
  reverseHoloTrend?: Maybe<Scalars['Int']>;
  suggestedPrice?: Maybe<Scalars['Int']>;
  trendPrice?: Maybe<Scalars['Int']>;
};

export type PriceGrade = {
  __typename?: 'PriceGrade';
  directLow?: Maybe<Scalars['Int']>;
  high?: Maybe<Scalars['Int']>;
  low?: Maybe<Scalars['Int']>;
  market?: Maybe<Scalars['Int']>;
  mid?: Maybe<Scalars['Int']>;
};

export type Resistance = {
  __typename?: 'Resistance';
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  card?: Maybe<Card>;
  healthCheck?: Maybe<GqlHealthCheck>;
};

export type RootQueryTypeCardArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SetImage = {
  __typename?: 'SetImage';
  logo?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type TcgPlayer = {
  __typename?: 'TCGPlayer';
  prices?: Maybe<TcgPlayerPrice>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TcgPlayerPrice = {
  __typename?: 'TCGPlayerPrice';
  normal?: Maybe<PriceGrade>;
  reverseHolofoil?: Maybe<PriceGrade>;
};

export type Weakness = {
  __typename?: 'Weakness';
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type QueryCardByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type QueryCardByIdQuery = {
  __typename?: 'RootQueryType';
  card?: {
    __typename?: 'Card';
    name?: string | null;
    number?: string | null;
    images?: { __typename?: 'Image'; large?: string | null; small?: string | null } | null;
    set?: { __typename?: 'CardSet'; images?: { __typename?: 'SetImage'; logo?: string | null } | null } | null;
  } | null;
};

export const QueryCardByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'queryCardById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'card' },
            arguments: [
              { kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'set' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                        selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'logo' } }] },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryCardByIdQuery, QueryCardByIdQueryVariables>;
