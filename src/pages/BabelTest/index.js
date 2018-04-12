import React from 'react';
import { hot } from 'react-hot-loader';

import { BabelTest } from '@/modules/BabelTest';

const BabelTestComp = () => (
  <BabelTest
    destructure={[
      {
        a: 1,
        b: 2,
      },
    ]}
  />
);

export default hot(module)(BabelTestComp);
