import { User } from '@nickgdev/larvitar-types';
import React from 'react';
import { UserContextType } from '../../types';

const defaultContext: UserContextType = {
  user: undefined,
  dispatchStateChange(u) {},
};

const userContext = React.createContext<UserContextType>(defaultContext);

export function getUser() {
  return React.useContext(userContext);
}

export function UserProvider(props: { children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[] }) {
  const [userCtx, setUserCtx] = React.useState<User | undefined>();
  React.useEffect(() => {
    const prevUser = window.localStorage.getItem('pk-user-hash');
    if (prevUser) {
      const userObject = JSON.parse(prevUser);
      setUserCtx(userObject);
    }
  }, []);
  const P = userContext.Provider;
  return (
    <P
      value={{
        user: userCtx,
        dispatchStateChange: function (u: User | undefined) {
          setUserCtx(u);
        },
      }}
    >
      {props.children}
    </P>
  );
}
