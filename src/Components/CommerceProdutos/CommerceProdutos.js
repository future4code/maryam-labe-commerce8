import React from "react";
import React from "styled-Component";
import estrelaDaMorte from './Components/img/estreladamorte.jpg'
import icbm from './Components/img/icbm.jpg'
import meteoro from './Components/img/meteoro.jpg'
import ominus from './Components/img/ominus.jpg'
import satelite from './Components/img/satélite.jpg'
import ussEnterprise from './Components/img/ussenterprise.jpg'




function App () {

    const card = styled.div`
    border: 4px;
    width: 200px;
    margin: 8px;    
    `

    const produtos = [
    {
        id: 1,
        nome: 'Estrela da Morte Star Wars',
        preço: 730000000000,
        imagem: (estrelaDaMorte),
    },

    {
        id: 2,
        nome: 'Míssil Balístico Intercontinental',
        preço: 50000000,
        imagem: (icbm),
    },

    {
        id: 3,
        nome: 'Meteoro Condrítico',
        preço: 8000000,
        imagem: (meteoro),
    },

    {
        id: 4,
        nome: 'Ônibus Espacial',
        preço: 44000000,
        imagem: (ominus),
    },

    {
        id: 5,
        nome: 'Satélite de Espionagem',
        preço: 17000000,
        imagem: (satelite),
    },

    {
        id: 6,
        nome: 'USS Enterprise Star Trek',
        preço: 210000000000,
        imagem: (ussEnterprise),
    },
]
}

