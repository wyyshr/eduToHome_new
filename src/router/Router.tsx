import * as React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import routers from './Config';

const RouterView: React.FC = () => {
  return (
    <Router>
      {
        routers.map(({path,exact,Component,children},i) => {
          return (
            <Route key={i} path={path} exact={exact?true:false} 
             render={(props) => (
               <Component {...props} routes={children} />
             )} />
          )
        })
      }
    </Router>
  )
}
export default RouterView