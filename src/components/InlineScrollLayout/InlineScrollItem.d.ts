import * as React from 'react';

export interface InlineScrollItemProps {
  flex?: Number | String;
  width?: String;
  height?: String;
  style?: React.CSSProperties;
  className?: String;
}

declare class InlineScrollItem extends React.Component<InlineScrollItemProps, any> {
}

export default InlineScrollItem;