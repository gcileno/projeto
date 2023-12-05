// pages/onemovie/[id].js
import { useRouter } from 'next/router';
import useSWR from 'swr';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Link from 'next/link';

import Layout from '../components/layout';
import MenusLink from '../components/menu';
import Barrasup from '../components/barrasup';


const OneMovie = ({ movie }) => {
    const { id } = useRouter().query;
    const [searchId, setSearchId] = useState('');

    const handleSearch = async (e) => {
      e.preventDefault();

      // Faça a chamada da API com o ID digitado pelo usuário (searchId)
      const res = await fetch(`http://www.omdbapi.com/?apikey=a649aa72&i=${searchId}`);
      const newMovie = await res.json();

      

      // Atualize o estado do filme com os novos detalhes obtidos da API
      setSearchId(newMovie.imdbID); // Atualize o estado com o novo ID
    };  

    const detalhes = () => {
        return (
          <ul className="list-group list-group-flush">
            {Object.entries(movie).map(([key, value]) => (
              <li key={key} className="list-group-item">
                <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
              </li>
            ))}
          </ul>
        );
      };
  
    return (
      <div>
        <Barrasup/>
        <div className="container mt-4">

          <div className="row">
            <MenusLink/>
            <Layout>
                <Navbar handleSearch={handleSearch} setSearchId={setSearchId} searchId={searchId} />
                <div className="card" style={{ maxWidth: '100%' }}>
                    <div className="row g-0">

                      <div className="col-md-3">
                        <img src={movie.Poster} className="img-fluid rounded-start" alt={movie.Title} />
                      </div>

                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">Detalhes do Filme</h5>
                              {detalhes()}
                          </div>
                      </div>
                  </div>
                </div>
              </Layout>

          </div>
        </div>

      </div>
    );
  };

export default OneMovie;

function Navbar({handleSearch, setSearchId, searchId}){
  
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <Link as={`/#`} href="index">
              <h2>Receita5 - Data Fetching #3 com useState()</h2>
            </Link>
            <form className="d-flex" onSubmit={handleSearch} >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar por ID"
                aria-label="Search"
                name="search"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Aplicar
              </button>
            </form>
          </div>
        </nav>  
    );
  }

export async function getServerSideProps(context) {
    const { id } = context.query;
  
    // Use a função fetch para obter os detalhes do filme com o id fornecido
    const res = await fetch(`http://www.omdbapi.com/?apikey=a649aa72&i=${id}`);
    const movie = await res.json();
  
    return {
        props: {
          movie, // Isso passará o objeto inteiro para o componente
        },
      };
    }
