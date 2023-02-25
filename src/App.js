import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow';
import React,{useEffect,useState} from 'react';
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(){

    const [movieList,setMovieList]= useState([]);
    const [featuredData,setFeaturedData] = useState(null)

    useEffect(()=>{
        const loadAll = async()=>{
            //pegando a lista total;
            let list = await Tmdb.getHomeList();
            setMovieList(list)
            //Pegando o Featured
            let values = list.filter(i=>i.slug === 'originals');
            let originals = values[0].items.results.filter(i=>i.backdrop_path!=null)
            let randomChosen = Math.floor(Math.random() * (originals.length -1))
            let chosen = originals[randomChosen];
            let movieInfo = await Tmdb.getMovieInfo(chosen.id,chosen.media_type);
            setFeaturedData(movieInfo);
            
        }
        loadAll()
    },[])

    
 return(
    <div className='page'>
        <Header/>
     
        {featuredData &&
            <FeaturedMovie item={featuredData}/>
        }
        <section className='lists'>
        {movieList.map((item,key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
        </section>
        <Footer/>
    </div>
    )
}