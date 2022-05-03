import React from 'react';
import { GraphCanvas } from '../../src';
import { simpleEdges, simpleNodes } from '../assets/demo';

export default {
  title: 'Demos/Basic',
  component: GraphCanvas
};

export const Simple = () => (
  <GraphCanvas nodes={simpleNodes} edges={simpleEdges} />
);

export const NoAnimation = () => (
  <GraphCanvas animated={false} nodes={simpleNodes} edges={simpleEdges} />
);
