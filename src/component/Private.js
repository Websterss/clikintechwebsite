import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Private = ({ component: Component, ...rest }) => {
    return(
        <Route
          {...rest}
          render={
            (props) => 
            localStorage.getItem("keyid") ? 
            (<Component {...props} />)
            :
            (<Redirect to="/Login" />)
          }
        />
    )
}

export default Private;