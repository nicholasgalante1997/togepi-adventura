import { Request, Response } from 'express';
import { QueryClient, dehydrate } from 'react-query';
import { embed, l } from '../../utils';
import { CARD_SHOW_QUERY_KEY, getCardShowAsyncProps } from '../../react-query-server';
import { CardShowPage, Error404Page, Error500Page } from '../../web/pages';

export async function pokemonCardShowHandler(req: Request, res: Response) {
  const { params } = req;
  const pkId = params.pkId;
  if (!pkId) {
    l('Unknown Pokemon ID; Unavailable on path.', 'error');
    res.send(embed(Error404Page, { bundleName: '404' }));
    return;
  }
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: [CARD_SHOW_QUERY_KEY, pkId],
      queryFn: async () => await getCardShowAsyncProps(pkId),
    });
    const dehydratedState = dehydrate(queryClient);
    res.send(
      embed(CardShowPage, {
        bundleName: 'cardShow',
        props: { pkId },
        queryConfig: { dehydratedState, queryClient },
      })
    );
  } catch (e) {
    l((e as Error).message, 'error');
    res.send(embed(Error500Page, { bundleName: '500' }));
  }
}
