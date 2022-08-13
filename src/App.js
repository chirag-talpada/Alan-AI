import React,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import './App.css';

import NewsCards from './components/NewsCards/NewsCards';
import WhetherCard from './components/WhetherCard';
import bannerLogo from './assets/logo.png';

const alanKey='';

const App = () => {

    const [newsArticles,setNewsArticles]=useState([]);
    const [whetherData,setWhetherData]=useState([]);
    const [isWhetherData,setIsWhetherData]=useState(false);
    const [activeArticle,setActiveArticle]=useState(-1);

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,data,number,word})=>{
                
                switch(command){
                    case "newHeadlines":
                        setNewsArticles(data);
                        setActiveArticle(-1);
                        setIsWhetherData(false);
                        break;
                    case "highlight":
                        setActiveArticle((oldArticle)=>oldArticle+1);
                        break;
                    case "openA":
                        const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                        const article = data[parsedNumber - 1];

                        if (parsedNumber > data.length) {
                        alert('Invalid article number try again...');
                        } else if (article) {
                        window.open(article.url, '_blank');
                        } else {
                        alert('Please try again...');
                        }
                        break;
                    case "whetherData":
                        setWhetherData(data);
                        setIsWhetherData(true);
                        break;
                    case "openYoutube":
                        window.open("https://youtube.com",'_blank');
                        break;
                    case "openWhatsapp":
                        window.open("https://web.whatsapp.com",'_blank');
                        break;
                    case "openGoogle":
                        window.open("https://www.google.com",'_blank');
                        break;
                    case "openGmail":
                        window.open("https://mail.google.com",'_blank');
                        break;
                    case "searchWord":
                        window.open("https://www.google.com/search?q="+word+"",'_blank');
                        break;
                    case "searchWordYoutube":
                        window.open("https://www.youtube.com/results?search_query="+word+"",'_blank');
                        break;
                    case "shutDown":
                        setTimeout(()=>{
                            window.open("about:blank","_self");
                            window.close();
                        },1000);
                        break;
                    default:
                        
                }
            }
        })
    },[]);

    return (
        <div className='container'>
            <div className='banner'>
                <img src={bannerLogo} alt="logo" /> Alan AI
            </div>
            
            {isWhetherData?<WhetherCard data={whetherData}/>:<NewsCards articles={newsArticles} activeArticle={activeArticle} />}
            
            
        </div>
    );
} 

export default App;
