import React from 'react'
import {withRipple} from '@material/react-ripple'

const List = (props) => {
  const {
    children,
    className = '',
    // call `initRipple` from the root element's ref. This attaches the ripple
    // to the element.
    initRipple,
    // include `unbounded` to remove warnings when passing `otherProps` to the
    // root element.
    unbounded,
    ...otherProps
  } = props

  return (
    <div
      className={`mdc-list-item ${className}`}
      ref={initRipple}
      {...otherProps}>
      {children}
    </div>
  );
};

export default withRipple(List)