import React from 'react'

const Pagination = props => {
    return (
        <div className="py-3">
            <button type='button' onClick={props.paginaAnterior} className='btn btn-info me-1 w-25'>&larr; Previous</button>
            <button type='button' onClick={props.paginaSiguiente} className='btn btn-info ms-1 w-25'>Next &rarr;</button>
        </div>
    )
    
}

export default Pagination;