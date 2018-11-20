import React from 'react';

const InlineScrollLayout = (props) => {
  const {
    style = {}, className = '',
    children,
  } = props;
  const DefaultStyle = {
    display: 'flex',
  };

  return (
    <div style={{ ...style, ...DefaultStyle }} className={className}>
      {children}
    </div>
  );
}
export default InlineScrollLayout;