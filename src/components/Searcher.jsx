import React, { Component } from 'react';
import './css/Searcher.css'

class Searcher extends Component {
  searchRef = React.createRef(); // Crea la lectura del input
  getData = (e) => {
    e.preventDefault();  // Previene recargar la apgina

    // Lee el valor del input
    const data = this.searchRef.current.value

    // Lo envia al componentes principal
    this.props.searchData(data)
}
  render() {
    return (
      <div className="searcher-container">
        <form onSubmit={this.getData}>
          <div className="row"> 
            <div className="form-group col-md-8">
              <input
                ref={this.searchRef} // Asi le referenciamos lo que el usuario escriba 
                type="text"
                className="form-control form-control-lg searchPlace"
                placeholder="Search an Image. Example: Football"
              />
            </div>
            <div className="form-group col-md-4 mt-3 mt-md-0">
              <input
                type="submit"
                className="btn w-100 h-100 btn-danger btn-block"
                value={"Search"}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searcher;
