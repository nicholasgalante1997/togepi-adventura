import React from 'react';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/CardShowPage';
import { Footer } from '../components/Footer';
import { useCardShowPageProps } from '../react-query-hooks';

export type CardShowPageProps = { pkId: string };

export function CardShowPage(props: CardShowPageProps) {
  const { data, isLoading, isError, error } = useCardShowPageProps(props.pkId);

  if (isError || error) {
    /** Start handling errors more targetedly */
    return <p>Error.</p>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={data!} />
      <Footer pokemon="togepi" />
    </div>
  );
}
