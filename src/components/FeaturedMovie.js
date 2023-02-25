import React from 'react';
import './FeaturedMovie.css'

export default function FeaturedMovie({item}){
    let genero = [];
    item.genres.forEach(element=>{
        genero.push(element.name)
    })
    
    return (
    <section id='featured'>
        <div className='image'style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize:'cover'
        }}>
            <div id='vertical'>
                <div id='horizontal'>
                </div>
            </div>
        </div>
        <div id='info'>
            <p id='titulo'>{item.name}</p>
            <p id='pontos'>{(item.vote_average).toFixed(1)}</p>
            <p id='temporadas'>{`${item.seasons.length} Temporada${item.seasons.length > 1 ? 's':''}`}</p>
            <p id='sinopse'>{item.overview}</p>
            <div id='buttons'>
                <button className='botao' id='assistir'><span>▸</span>Assistir</button>
                <button className='botao' id='addLista'> + Mais informações</button>
            </div>
            <p id='genero'>{`Gênero: ${genero.join(', ')}`}</p>
        </div>
    </section>
    )
}
