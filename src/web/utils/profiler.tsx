import React, { Profiler, type ProfilerOnRenderCallback } from 'react';
import handlbars from 'handlebars';

const logline = `******************************
Component: {{ id }};
Render: {{ phase }};
ActualDuration: {{ actualDuration }};
BaseDuration: {{ baseDuration }};
CommitTime: {{ commitTime }};
`;

const reportRenderMetrics: ProfilerOnRenderCallback = function (id, phase, actualDuration, baseDuration, _startTime, commitTime) {
  const template = handlbars.compile(logline);
  const metricString = template({ id, phase, actualDuration, baseDuration, commitTime });
  console.log(metricString);
};

// https://react.dev/reference/react/Profiler
export function withProfilerMetrics<P = Record<string, unknown>>(id: string, Component: React.ComponentType<P>): React.ComponentType<P> {
  /** Profiler adds overhead to our production build. DO NOT USE IN PRODUCTION! HMPH! */
  if (process.env.NODE_ENV === 'production') {
    return Component;
  }
  return function ProfilerWrapper(args: P) {
    return (
      <Profiler id={id} onRender={reportRenderMetrics}>
        <Component {...(args as P & Partial<JSX.IntrinsicAttributes>)} />
      </Profiler>
    );
  };
}
