import React from 'react';

const InlineScrollItem = (props) => {
  const {
    style = {}, className = '',
    width = '100%', height = '100%', flex = '0 1 auto',
    children,
  } = props;
  const DefaultStyle = {
    width,
    height,
    flex,
    overflow: 'auto',
  };

  return (
    <div style={{ ...style, ...DefaultStyle }}>
      {children}
    </div>
  );
}
export default InlineScrollItem;