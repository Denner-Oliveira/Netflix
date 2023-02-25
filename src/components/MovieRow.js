import React,{useState} from "react";
import './MovieRow.css';
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi';

export default function MovieRow({title,items}){
    
    const [margin,setMargin] = useState(0);

    function cliqueEsquerda(){
        if(margin <= -(items.results.length-12)*170){
            return
        }else{
            setMargin(margin - 170)
        }
    }

    function cliqueDireita(){
        if(margin >=0){
            return
        }else{
            setMargin(margin + 170)
        }
    }
    
    return (
        <>
        <h2 className="title">{title}</h2>
        <div className="movie-row">
        <BiLeftArrow onClick={cliqueEsquerda} id='esquerda'/>
            <div className="movie-row--listarea">
                <div className="movie-row--list" style={{
                    width:items.results.length * 170,
                    marginLeft:margin
                }}>
                    {items.results.length > 0 && items.results.map((item,key)=>(
                        <div key={key}className="movie-row--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
            <BiRightArrow onClick={cliqueDireita} id='direita'/>
        </div>
        </>
    )
}