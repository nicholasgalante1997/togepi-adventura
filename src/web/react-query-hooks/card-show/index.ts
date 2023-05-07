import { CARD_SHOW_QUERY_KEY, getCardShowAsyncProps } from '@server/react-query/server/card-show';
import { useQuery } from 'react-query';

export const useCardShowPageProps = (id: string) =>
  useQuery({
    queryFn: async () => await getCardShowAsyncProps(id),
    queryKey: [CARD_SHOW_QUERY_KEY, id],
  });
