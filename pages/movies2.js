import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSWR from 'swr';

export default function Movies2() {
  const [searchTerm, setSearchTerm] = useState('avatar'); //pesquisa por defalt o estado incial
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=a649aa72&s=${searchTerm}`,
    fetcher
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const newSearchTerm = e.target.elements.search.value.trim();

    if (newSearchTerm) {
      setSearchTerm(newSearchTerm);
    } else {
      alert('Por favor, insira um nome válido antes de aplicar a busca.');
    }
  };

  if (error) return <div>falha na requisição...</div>;

  if (!data) return <div>carregando...</div>;

  return (
    <div className="container">
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Receita4 - Data Fetching #2   
          </a>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busca Nome"
              aria-label="Search"
              name="search"
            />
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busca ano"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Aplicar
            </button>
          </form>
        </div>
      </nav>

      {data.Search.length === 0 ? (
        <div className="alert alert-warning mt-3" role="alert">
          Nenhum resultado encontrado. Por favor, ajuste sua busca.
        </div>
      ) : null}

      <div className="row">
        {data.Search.map((m) => (
          <div key={m.imdbID} className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src={m.Poster} className="card-img-top" alt={m.Title} />
              <div className="card-body">
                <h5 className="card-title">{m.Title}</h5>
                <p className="card-text">{m.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
