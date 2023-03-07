import { User } from '@nickgdev/larvitar-types';

export type UserContextType = {
  user: User | undefined;
  dispatchStateChange: (u: User | undefined) => void;
};
