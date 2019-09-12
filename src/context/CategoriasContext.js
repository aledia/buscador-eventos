import React, { Component } from 'react';
import axios from 'axios';


// crear context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;



class CategoriasProvider extends Component{
    token = 'H3PIGTGXFKSTYDPRCF';


    state = {
        categorias : []
    } 

    componentDidMount(){
        this.obtenerCategorias();
    }
    obtenerCategorias = async () => {
        let url = `'https://www.eventbriteapi.com/v3/categories/{id}/?token=${this.token}&locale=es_ES`;
        let categorias = await axios.get(url);
        console.log(categorias);

    }

    render () {
        return (
            <CategoriasContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}
export default CategoriasProvider;