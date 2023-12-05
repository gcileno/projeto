import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const Layout = ({ children }) => (
    <div className="col-md-9">
      {children}
    </div>
  );

export default Layout;
