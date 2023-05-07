import { type User } from '@nickgdev/larvitar-types';

export interface UserContextType {
  user: User | undefined;
  dispatchStateChange: (u: User | undefined) => void;
}
