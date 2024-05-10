import React, { FC, useMemo, useRef, useState } from 'react';
import { Billboard, Html, Text } from 'glodrei';
import { Color, ColorRepresentation, Box3, Vector3 } from 'three';
import ellipsize from 'ellipsize';

export interface HTMLLabelProps {
  /**
   * Text to render.
   */
  text: string;

  /**
   * Color of the text.
   */
  color?: ColorRepresentation;
}

export const HTMLLabel: FC<HTMLLabelProps> = ({ text, color }) => {
  const ellipsisLimit = 138;
  const shortText =
    text.length > ellipsisLimit
      ? text.substring(0, ellipsisLimit) + '...'
      : text;
  return (
    <Html transform center position={[0, 0, 2]}>
      <div
        style={{
          border: 'solid 1px black',
          background: 'lightgray',
          maxWidth: '2000px',
          maxHeight: '800px',
          position: 'absolute',
          transform: 'translate(-50%, -180px)'
        }}
      >
        <p
          style={{
            fontSize: '10rem',
            overflowWrap: 'break-word',
            textAlign: 'center',
            margin: '40px',
            color: color.toString()
          }}
        >
          {shortText}
        </p>
      </div>
    </Html>
  );
};

HTMLLabel.defaultProps = {
  color: '#2A6475'
};
