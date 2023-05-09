import React from 'react';
import { CardImage, CardImageContainer, ItemCardShell, CardTitle, ItemInfoContainer, SetImage } from './views';
import { gql, useQuery } from '@apollo/client';
import { GetItemCardDataByIdQuery, GetItemCardDataByIdQueryVariables } from '@gql/types';

interface ItemCardProps {
  cardId: string;
}

const GET_ITEM_CARD_DATA_BY_ID = gql`
  query getItemCardDataById($id: String!) {
    card(id: $id) {
      name
      number
      images {
        large
      }
      set {
        name
        printedTotal
        id
        images {
          logo
        }
      }
    }
  }
`;

export function ItemCard(props: ItemCardProps) {
  const { data, loading, error } = useQuery<GetItemCardDataByIdQuery, GetItemCardDataByIdQueryVariables>(GET_ITEM_CARD_DATA_BY_ID, {
    variables: { id: props.cardId },
  });

  if (loading) {
    return <ItemCardShell></ItemCardShell>;
  }

  if (error) {
    console.log(error);
    return null;
  }

  if (data) {
    return (
      <ItemCardShell>
        <CardImageContainer>
          <CardImage src={data.card?.images?.large ?? ''} />
        </CardImageContainer>
        <ItemInfoContainer>
          <CardTitle>
            {data.card?.name}{' '}{data.card?.number}/{data.card?.set?.printedTotal}
          </CardTitle>
          <SetImage src={data?.card?.set?.images?.logo ?? ''} />
        </ItemInfoContainer>
      </ItemCardShell>
    );
  }

  return null;
}
