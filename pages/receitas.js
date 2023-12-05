import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import React from 'react';
import MenusLink from './components/menu';
import Barrasup from './components/barrasup';

export default function Receitas(){
  return(
    <div>
      {/* Navbar Superior */}
      <Barrasup/>

      {/* Corpo Central */}
      <div className="container mt-4">
        <div className="row">
          <MenusLink/>
          {/* Corpo Principal */}
          <Layout>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 1</div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">
                        A receita traz as configurações inicias do Next e apenas pede para cirar funções defalt para
                        as rotas do site, então inclua no seu navegador o endreço + /about ou /contacts.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                    <a href="/#">Home!</a>
                    </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 2</div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">A receita traz orientaçoes sobre a construções de tgas e marcações HTML que podem
                      irão se comportar como funções dentro do navegador ao lado do cliente.
                      As atividade sugeridas pediam a criação de marcas e subdiretõrios dentro de 'pages', que foi realizado
                      conforme avanço no Curso.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <a href="/#">Home!</a>
                    </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 3 </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">A receita traz orientaçoes sobre uso de da API sugerida OMDb
                      e as aplicações do Next para uso assincrono de uma API.
                      As atividade sugeridas incluiam pesquisas por nome de filme e ano, exibir informaçoes retorno da api.
                      com exceção da pesquisa por ano as demais atividades foram realizadas.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <a href="/movies2">Aplicação da atividade</a>
                    </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 4</div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">A receita traz orientaçoes sobre uso de da API sugerida OMDb,
                        o uso de estados de aplicação no lado do cliente com swr, melhornaod a experiencia do usuario
                        e a respostas da pagina a suas ações, viabilizando um processo de melhor desempenho do lado do servidor
                        As atividades sugeridas foi realizado apenas o item 1 onde é listado os filmes e criado uma página
                        com idimbID para informações do filme selecionado.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <a href="/movies2">Aplicação da atividade</a>
                    </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 5</div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">A receita traz orientaçoes sobre uso de da API sugerida OMDb,
                        o uso de estados de aplicação no lado do cliente com swr, uso de hooks e gestão de estado,
                        adptando a tela do usuario e ofrnecendo informações também do lado do cliente. Os dados e informações
                        sõa fornecidas pela API OMDb.
                        As atividades pediam para bonitifcar a página com uso de alguma ferramenta, nesse caso o bootstrap 5
                        usar a rota [id].js para viabilizar reutilização de pagina para acessar as informações de cada filme.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <a href="/movies3">Aplicação da atividade</a>
                    </div>
                </div>

                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">Receita 6</div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Aplicação da receita e resolução das atividades propostas</h5>
                      <p className="card-text">
                        A receita traz orientaçoes a respeito do uso de formulários para preenchimento de dados
                        para usa-los junto a API mudando o estado da aplicação para a pesquisa selecionada no form.
                        As atividades sugeridas foram realziadas 
                      </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Mensagem de erro ao pesquisar besteira</li>
                        <li className="list-group-item">Apertar enter e realizar a pesquisa</li>
                        <li className="list-group-item">Formulário de pesquisa por KID da API</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <a href="/movies4">Aplicação da atividade</a>
                    </div>
                </div>


            </div>
          </Layout>
        </div>
      </div>
    </div>
  )
}