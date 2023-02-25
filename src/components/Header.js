import React,{useState} from "react"
import './Header.css'

export default function Header(){
    
    const [fundoPreto,setFundoPreto] = useState(false)
    window.addEventListener('scroll', background);

    function background(){
        if(window.scrollY > 10){
            setFundoPreto(true)
        }else{
            setFundoPreto(false)
        }
    }
    
    return(
        <header className={`header ${fundoPreto?'background':''}`} >
            <a href="https://youtube.com"><img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix" id='logo'/></a>
            <div className="shows">
                <a href="https://youtube.com"><span>Início</span></a>
                <a href="https://youtube.com"><span>Filmes</span></a>
                <a href="https://youtube.com"><span>Séries</span></a>
                <a href="https://youtube.com"><span>Minha Lista</span></a>
            </div>
            <nav id='nav'>
                <input type="text" placeholder=" Títulos, gêneros"/>
                <img src="https://via.placeholder.com/40" alt="" />
            </nav>
        </header>
    )
}