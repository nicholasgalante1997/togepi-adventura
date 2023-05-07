import { type Request, type Response } from 'express';
import { QueryClient, dehydrate } from 'react-query';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
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
    const apolloClient = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: 'http://localhost:4000/graphql',
      }),
      cache: new InMemoryCache(),
    });
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: [CARD_SHOW_QUERY_KEY, pkId],
      queryFn: async () => await getCardShowAsyncProps(pkId),
    });
    const dehydratedState = dehydrate(queryClient);
    const page = await embed(CardShowPage, {
      bundleName: 'cardShow',
      props: { pkId },
      queryConfig: { dehydratedState, queryClient },
      apolloConfig: { apolloClient },
    });
    res.send(page);
  } catch (e) {
    l((e as Error).message, 'error');
    res.send(await embed(Error500Page, { bundleName: '500' }));
  }
}
