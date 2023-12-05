import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Barrasup = ({ children }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Gabriel Cileno -Atidades PWEB</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Página Inicial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nós</a>
                </li>
                {/* Adicione mais itens de navegação conforme necessário */}
                </ul>
            </div>
        </div>
    </nav>
)

export default Barrasup;