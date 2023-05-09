import React, { PropsWithRef, Suspense } from 'react';
import { l } from '@server/utils/log';

type LocalErrorBoundaryProps = { onErrorJsx?: React.ReactNode; failSilently?: boolean; children: React.ReactNode };
type LocalErrorBoundaryState = { didError: boolean };

class ErrorBoundary extends React.Component<LocalErrorBoundaryProps, LocalErrorBoundaryState> {
  constructor(props: LocalErrorBoundaryProps) {
    super(props);
    this.state = {
      didError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    l(error, 'error');
    return {
      didError: true,
    };
  }

  render() {
    if (this.state.didError) {
      const { onErrorJsx } = this.props;
      return this.props.failSilently || !onErrorJsx ? null : onErrorJsx;
    }
    return this.props.children;
  }
}

export function withLazyComponent<P = {}>(
    LazyComponent: React.LazyExoticComponent<any>,
    loadingJsx?: React.ReactNode,
    errorJsx?: React.ReactNode,
    failSilently: boolean = false,
) {
  return function (props: P) {
    return (
      <ErrorBoundary failSilently={failSilently} onErrorJsx={errorJsx}>
        <Suspense fallback={loadingJsx}>
          <LazyComponent {...(props as PropsWithRef<P> & JSX.IntrinsicAttributes)} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}
