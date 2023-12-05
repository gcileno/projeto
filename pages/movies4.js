import Head from 'next/head';
import { useState } from 'react';
import Layout from './components/layout';
import MenusLink from './components/menu';
import Barrasup from './components/barrasup';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSWR from 'swr';
import Link from 'next/link';


const Movies4 = () => {
    const [url, setUrl] = useState('');

    const { data, error } = useSWR(url, theFetcher);

    const handleButtonClick = (e) => {
      e.preventDefault();

      if (url === '') setUrl('http://www.omdbapi.com/?apikey=a649aa72&s=avatar');
      else setUrl('');
    };

    const handleSearch = (e) => {
      e.preventDefault();
      const newSearchTerm = e.target.elements.search.value.trim();
      const newSearchYear = e.target.elements.year.value.trim();

      setUrl(`http://www.omdbapi.com/?apikey=a649aa72&s=${newSearchTerm}&y=${newSearchYear}`);
    };

    //aplciar métodos da pagina?
    return (
        <div>
          <Head>
            <title>Gabriel Cileno</title>
            {/* Adicione meta tags, links CSS personalizados, etc., conforme necessário */}
          </Head>
    
          {/* Navbar Superior */}
          <Barrasup/>
    
          {/* Corpo Central */}
          <div className="container mt-4">
            <div className="row">
    
              <MenusLink/>
              <Layout>
                <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                  <div className="container-fluid">
                    <Link as={`/#`} href="index">
                      <h2>Receita6 - Data Fetching #4 + formulário básico</h2>
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

                <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} show={url !== ''} />

              </Layout>

            </div>
          </div>
        </div>
    
      );
}

export default Movies4;

async function theFetcher(url) {
  if (url === null || url === '') return { Search: '' };

  const res = await fetch(url);
  const json = await res.json();

  return json;
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
          <div key={m.imdbID} className="col-sm-6">
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