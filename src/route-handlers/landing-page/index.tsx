import { Request, Response } from 'express';
import { QueryClient, dehydrate } from 'react-query';
import { embed } from '../../utils';
import { LANDING_PAGE_QUERY_KEY, getLandingPageAsyncProps } from '../../react-query-server';
import { LandingPage } from '../../web/pages';
import { ExtendedRequest } from '../../types';

export async function landingPageRouteHandler(req: Request, res: Response) {
  const { userAgent, marketplace, locale } = req as ExtendedRequest;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: LANDING_PAGE_QUERY_KEY,
    queryFn: getLandingPageAsyncProps,
  });
  const dehydratedState = dehydrate(queryClient);
  const page = await embed(LandingPage, {
    bundleName: 'landingPage',
    queryConfig: { dehydratedState, queryClient },
    props: { serverConfig: { userAgent, marketplace, locale } },
  });
  res.send(page);
  queryClient.clear();
}
