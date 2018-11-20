import * as React from 'react';
import InlineScrollItem from './InlineScrollItem'

export interface InlineScrollLayoutProps {
  style?: React.CSSProperties;
  className?: String;
}

declare class InlineScrollLayout extends React.Component<InlineScrollLayoutProps, any> {
  public static InlineScrollItem: typeof InlineScrollItem
}

export default InlineScrollLayout;