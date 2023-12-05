// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import Layout from './components/layout';
import MenusLink from './components/menu';
import Barrasup from './components/barrasup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [content, setContent] = useState('Conteúdo padrão');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar o formulário, se necessário
    setContent('Conteúdo alterado pelo formulário!');
  };

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
          {/* Corpo Principal */}
          <Layout>
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Bem vindo a página de Gabriel</h4>
              <p>Esse site contém a resolução das atividades realizadas pelo Professor Fabrício
                da disciplina Programação Web da UFRN
              </p>
              <p>Você pode acessar todas as atividades na página : 
                <a href="https://sites.google.com/view/fabricio10/p%C3%A1gina-inicial/cursos/pweb/receita5?authuser=0" target="_blank" rel="noopener noreferrer">Aqui!</a>
              </p>
              <p class="mb-0">
                As receitas utilizaram a sugestão de API de filmes dispinilizada por <a href="https://www.omdbapi.com/">API OMDb</a>
              </p>
              <hr/>
              <p class="mb-0">
                Para acessar a aplicação das receitas e a resolução das atividade, é so clicar no menu ao lado esquerdo. Divirta-se
              </p>
            </div>
          </Layout>
        </div>
      </div>
    </div>

  );
};



export default Home;
