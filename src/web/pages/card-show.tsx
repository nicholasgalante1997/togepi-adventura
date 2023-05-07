import { gql, useQuery } from '@apollo/client';
import { CardShowPageComponent } from '../components/CardShowPage';
import { FixedNav } from '../components';
import { Footer } from '../components/Footer';
import { type QueryCardByIdQuery } from '@gql/types';
import React from 'react';

export interface CardShowPageProps {
  pkId: string;
}

const GET_CARD_BY_ID = gql`
  query queryCardById($id: String!) {
    card(id: $id) {
      name
      images {
        large
        small
      }
      number
      set {
        images {
          logo
        }
      }
    }
  }
`;

export function CardShowPage(props: CardShowPageProps) {
  const { loading, error, data } = useQuery<QueryCardByIdQuery>(GET_CARD_BY_ID, { variables: { id: props.pkId }, ssr: true });

  if (error != null) {
    /** Start handling errors more targetedly */
    return <p>Error.</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    data?.card != null && (
      <div className="page">
        <FixedNav />
        <CardShowPageComponent images={data.card.images} name={data.card.name} number={data.card.number} set={data.card.set} />
        <Footer pokemon="togepi" />
      </div>
    )
  );
}
