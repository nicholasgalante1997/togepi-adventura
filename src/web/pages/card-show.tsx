import React from 'react';
import { FixedNav } from '../components';
import { CardShowPageComponent } from '../components/CardShowPage';
import { Footer } from '../components/Footer';
import { useCardShowPageProps } from '../react-query-hooks';

export type CardShowPageProps = { pkId: string; };

export function CardShowPage(props: CardShowPageProps) {

  const { data, isLoading, isError, error } = useCardShowPageProps(props.pkId);

  if (isError || error) {
    return <p>react query error</p>;
  }

  if (!isLoading && !data) {
    return <p>data is {JSON.stringify(data)}</p>
  }

  return (
    <div className="page">
      <FixedNav />
      <CardShowPageComponent card={data!} />
      <Footer pokemon="togepi" />
    </div>
  );
}
