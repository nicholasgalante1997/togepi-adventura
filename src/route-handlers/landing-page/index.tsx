import { Request, Response } from 'express';
import { QueryClient, dehydrate } from 'react-query';
import { embed } from '../../utils';
import {
  LANDING_PAGE_QUERY_KEY,
  getLandingPageAsyncProps,
} from '../../react-query-server';
import { LandingPage } from '../../web/pages';

export async function landingPageRouteHandler(_req: Request, res: Response) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: LANDING_PAGE_QUERY_KEY,
    queryFn: getLandingPageAsyncProps,
  });
  const dehydratedState = dehydrate(queryClient);
  res.send(
    embed(LandingPage, {
      bundleName: 'landingPage',
      queryConfig: { dehydratedState, queryClient },
    })
  );
  queryClient.clear();
}
