import React from 'react';

type User = {
    username: string;
    uId: string;
    cards: Card[];
    
};

type UserContextType = {
    user: User | undefined;
    dispatchStateChange: (u: User | undefined) => void;
}

const userContext = React.createContext<>();