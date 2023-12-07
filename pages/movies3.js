import useSWR from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Link from 'next/link';

export default function Movies3() {
  const [url, setUrl] = useState('');

  const { data, error } = useSWR(url, theFetcher);

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (url === '') setUrl('https://www.omdbapi.com/?apikey=a649aa72&s=avatar');
    else setUrl('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const newSearchTerm = e.target.elements.search.value.trim();
    const newSearchYear = e.target.elements.year.value.trim();

    setUrl(`https://www.omdbapi.com/?apikey=a649aa72&s=${newSearchTerm}&y=${newSearchYear}`);
  };

  return (
    <div className="container">
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link as={`/#`} href="index">
            <h2>Receita5 - Data Fetching #3 com useState()</h2>
          </Link>
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
              name="year"
            />
            <button className="btn btn-outline-success" type="submit">
              Aplicar
            </button>
            <button className="btn btn-outline-success" onClick={handleButtonClick}>
              {url === '' ? 'Mostrar' : 'Ocultar'}
            </button>
          </form>
        </div>
      </nav>

      <Atividade/>

      <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} show={url !== ''} />
    </div>
  );
}

export function TheMovies({ data, show }) {
  if (!show) return <div></div>;

  if (data.error) return <div>falha na requisição</div>;

  if (data.Search === '') return <div>carregando...</div>;

  return (
    <div className="container">
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
              <div className="card-footer">
                <Link as={`/onemovies/${m.imdbID}`} href="/onemovies/[id]">
                    Veja as informações do filme
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Atividade() {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Atividade 5</h4>
      <p>
        Nesta página, foi aplicada a Receita 5 da terceira unidade de Programação Web ministrada pelo Prof. Fabrício, disponível em:{' '}
        <a href="https://sites.google.com/view/fabricio10/p%C3%A1gina-inicial/cursos/pweb/receita5?authuser=0" target="_blank" rel="noopener noreferrer">
          Página da Atividade
        </a>
      </p>
      <hr />
      <p className="mb-0">Exercício 01:</p>
      <p className="mb-1">Foi aplicada a ferramenta Bootstrap 5 para estilizar a página.</p>
      <p className="mb-0">Exercício 02:</p>
      <p className="mb-1">
        Nos cards de cada filme listado, foi inserido um link solicitado na atividade, direcionando o usuário para a página com as informações do filme selecionado a partir do ID disponível na API usada.
      </p>
      <p className="mb-0">Exercício 03:</p>
      <p className="mb-1">
        Aplicado um filtro para pesquisar usando a chave de filmes na API (essa solução foi aplicada na página de informações de filmes).
      </p>
    </div>
  );
}


async function theFetcher(url) {
  if (url === null || url === '') return { Search: '' };

  const res = await fetch(url);
  const json = await res.json();

  return json;
}

