import React, { FC, PropsWithChildren } from 'react';

interface IBgProps {
  style: {
    [prop: string]: string | number;
  }
}

const Background: FC<PropsWithChildren<IBgProps>> = ({ children, style }) => (
  <div
    style={style}
  >
    {children}
  </div>
);

export default Background;
