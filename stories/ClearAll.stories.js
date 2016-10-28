import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {ClearAll, RefinementList} from '../packages/react-instantsearch/dom';
import {withKnobs} from '@kadira/storybook-addon-knobs';
import {WrapWithHits} from './util';

const stories = storiesOf('ClearAll', module);

stories.addDecorator(withKnobs);

stories.add('default', () =>
  <WrapWithHits linkedStoryGroup="ClearAll">
    <div>
      <ClearAll />
      <RefinementList
        attributeName="colors"
        defaultRefinement={['Black']}
        theme={{root: {display: 'none'}}}
      /></div>
  </WrapWithHits>
);