import React, { Suspense } from 'react';
import Loading from '../Loading/Loading'

const Loadable = (Component: any) => (props:any) => (
   <Suspense fallback={<Loading />}>
      <Component {...props} />
   </Suspense>
);

export default Loadable;