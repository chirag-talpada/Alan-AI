import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';

import NewsCards from './components/NewsCards/NewsCards';
import bannerLogo from './assets/logo.png';

const alanKey='9c726505312ed6ecd1a9af5c9a6d8b3e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles,setNewsArticles]=useState([]);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,data})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(data);
                }
            }
        })
    },[]);

    return (
        <div className='container'>
            <div className='banner'>
                <img src={bannerLogo} alt="logo" /> Alan News AI
            </div>
            <NewsCards articles={newsArticles} />
            
        </div>
    );
} 

export default App;