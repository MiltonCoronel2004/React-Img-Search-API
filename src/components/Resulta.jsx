import React, { Component } from 'react'
import Imagen from './Imagen';
import Pagination from './Pagination';



class Resulta extends Component {

    showImgs = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        return (
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    {imagenes.map(imagen => (
                        <Imagen 
                            key = {imagen.id}
                            imagen = {imagen}
                        />
                    ))}
                </div>
                <Pagination 
                    paginaAnterior = {this.props.paginaAnterior}
                    paginaSiguiente = {this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }

    render() { 
        return (
            <React.Fragment>
                {this.showImgs()}
            </React.Fragment>
        );
    }
}
 
export default Resulta;