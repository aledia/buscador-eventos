import React, { Component } from 'react';



 const Evento = ({evento}) => {
   
        return (
           <div>
                <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo 
                        ? <img src={evento.logo.url} alt={evento.name}/>
                        :null  }

                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                </div>
                <div className="uk-card-footer">
                    <a href={evento.url} className="uk-card-button uk-card-button-secondary text-center">
                        Más Información
                    </a>
                </div>
            </div>
           </div>
        );
    
}

export default Evento;
