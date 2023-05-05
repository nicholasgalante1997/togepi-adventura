import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/CardShowPage';
import { Footer } from '../components/Footer';
import { useCardShowPageProps } from '../react-query-hooks';

export type CardShowPageProps = { pkId: string };

const GET_CARD_BY_ID = gql`
  query queryCardById($id: String!) {
    card(id: $id) {
      name
      id
      set {
        name
      }
    }
  }
`;

export function CardShowPage(props: CardShowPageProps) {
  const { data: propData, isLoading: propsLoading, isError: propsError } = useCardShowPageProps(props.pkId);
  const { loading: gqlLoading, error: gqlError, data: gqlData } = useQuery(GET_CARD_BY_ID, { variables: { id: props.pkId } });

  if (propsError) {
    /** Start handling errors more targetedly */
    return <p>Error.</p>;
  }

  if (propsLoading) {
    return <p>loading...</p>;
  }

  console.log({ gqlData });

  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={propData!} />
      <Footer pokemon="togepi" />
    </div>
  );
}
