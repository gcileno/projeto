import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const MenusLink = ({ children }) => (
        <div className="col-md-3">
          <div className="list-group">
            <a href="/receitas" className="list-group-item list-group-item-action">Receitas</a>
            <a href="/alzira" className="list-group-item list-group-item-action">Projeto</a>
            {children}
          </div>
        </div>
    );

export default MenusLink;