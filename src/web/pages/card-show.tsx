import { Card } from '@nickgdev/larvitar-types';
import React from 'react';

type CardShowPageProps = {
    card: Card;
};
export function CardShowPage(props: CardShowPageProps){
    console.log(props);
    return (
        <div>
            Card Show
        </div>
    );
}