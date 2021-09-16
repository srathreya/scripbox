import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout >
      <Component {...props}  />
    </Layout>
  )} />
);

RouteWithLayout.propTypes = {
  
  layout: PropTypes.object,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

export default RouteWithLayout;
