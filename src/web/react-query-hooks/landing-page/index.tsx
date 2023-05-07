import { LANDING_PAGE_QUERY_KEY, getLandingPageAsyncProps } from '@server/react-query/server/landing-page';
import { useQuery } from 'react-query';

export const useQueryLandingPageProps = () =>
  useQuery({
    queryFn: getLandingPageAsyncProps,
    queryKey: LANDING_PAGE_QUERY_KEY,
  });
