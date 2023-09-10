import React, { Component } from 'react'
import Searcher from './components/Searcher'
import Resulta from './components/Resulta'


class App extends Component {

  state = {
    data: '',
    imagenes: [],
    pagina: ''
  }


  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // Obtener valor de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es 1 no ir hacia atras, solo si la pagina es diferente a 1
    if(pagina != 1) pagina -= 1;

    // Cambiar estado
    this.setState({
      pagina
    }, () => {
      this.apiQuery();
      this.scroll();
    })
  }

  paginaSiguiente = () => {
    // Obtener valor de pagina actual
    let pagina = this.state.pagina;

    // Sumar una pagina a la pagina actual
    pagina += 1;

    // Cambiar el estado
    this.setState({
      pagina
    }, () => {
      this.apiQuery();
      this.scroll();
    })


  }

  apiQuery = () => {
    const data = this.state.data;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=39336987-ff1e53a8a2d0374ca52fd27d3&q=${data}&per_page=32&page=${pagina}`;
  

    fetch(url)
      .then(answer => answer.json())
      .then(result => this.setState({ imagenes : result.hits}))

  }
  

  searchData = (data) => {
    this.setState({
      data : data,
      pagina: 1
    }, () => {
      this.apiQuery();
    })
  }

  render() { 
    return (
      <div className='app container text-center'>
        <div className="jumbotron">
          <p className="lead text-center mt-4 display-6">Image Search</p>
  
          <Searcher 
            searchData = {this.searchData}
          />
        </div>
        <div className="row">
          <Resulta 
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}
 
export default App;