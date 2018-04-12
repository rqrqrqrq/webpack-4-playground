import React from 'react';
import { hot } from 'react-hot-loader';

import { CoroutineCounter } from '@/modules/StateCorutine';
import { AsyncCounter } from '@/modules/AsyncCounter';

const Counter = () => (
  <>
    <CoroutineCounter initialValue={1} incrementAmount={2} />
    <AsyncCounter />
  </>
);

export default hot(module)(Counter);
