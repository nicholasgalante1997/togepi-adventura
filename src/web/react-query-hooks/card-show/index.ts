import { useQuery } from 'react-query';
import {
  CARD_SHOW_QUERY_KEY,
  getCardShowAsyncProps,
} from '../../../react-query-server';

export const useCardShowPageProps = (id: string) =>
  useQuery({
    queryFn: () => getCardShowAsyncProps(id),
    queryKey: [CARD_SHOW_QUERY_KEY, id],
  });
