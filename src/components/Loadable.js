import React from 'react';
import L from 'react-loadable';
import Loading from 'components/loading';

const Loadable = (component, opts = {}) =>
  L({
    loading : Loading,
    loader : () => component,
    ...opts,
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props}/>;
    }
  });

export default Loadable;