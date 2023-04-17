import { useQuery } from 'react-query';
import {
  LANDING_PAGE_QUERY_KEY,
  getLandingPageAsyncProps,
} from '../../../react-query-server';

export const useQueryLandingPageProps = () =>
  useQuery({
    queryFn: getLandingPageAsyncProps,
    queryKey: LANDING_PAGE_QUERY_KEY,
  });
