import React, { lazy, Suspense } from 'react';

const LazyLibrary = lazy(() => import('./Library'));

const Library = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLibrary {...props} />
  </Suspense>
);

export default Library;
