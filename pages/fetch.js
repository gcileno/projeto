import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Movies({ data }) {
  return (
    <div className="container">

      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">Receita3 - Data fetching #1</a>
            <form class="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Busca Nome" aria-label="Search"></input>
              <input className="form-control me-2" type="search" placeholder="Busca ano" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Aplicar </button>
            </form>
         </div>

      </nav>

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


export async function getServerSideProps(context){
  const res = await fetch(`http://www.omdbapi.com/?apikey=a649aa72&s=avatar`)
  const data = await res.json()
  return {
      props: {
          data
      }
  }
}