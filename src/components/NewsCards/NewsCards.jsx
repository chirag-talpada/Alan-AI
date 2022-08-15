import React from 'react'

import NewsCard from '../NewsCard/NewsCard';

const infoCard=[
  {title:'Latest News',text:'Give me the latest news'},
  {title:'News by Categories',info:'Business , Entertainment , General , Health , Science , Sports , Technology...',text:'Give me the latest Technology News'},
  {title:'News by Terms',info:'Bitcoin , PlayStation 5 , Smartphones , Donald Trump...',text:"What's up with PlayStation 5"},
  {title:'News by Sources',info:'CNN , Wired , BBC News , Time , IGN , Buzzfeed , ABC News...',text:"Give me the news from CNN"}
];

const NewsCards = ({articles,activeArticle}) => {

  if(!articles.length){
    return (
      <div className='newscard-grid'>
          {infoCard.map((card,i)=>(
            <div className="card infocard" key={i} >
              <div className="glass"></div>
              <div className="infocard-content">
                <div className="infocard-title">{card.title}</div>
                {card.info?
                  (<div className="infocard-infobox">
                    <div className='infocard-subtitle'>
                      {card.title.split(' ')[2]}:
                    </div>
                    <div className="infocard-info">
                      {card.info}
                    </div>
                  </div>)
                  :null}
                  <div className="infocard-exbox">
                    <div>Trying to Say:</div>
                    <div className="infocard-example">
                      {card.text}
                    </div>
                  </div>
                </div>
            </div>
          ))}

          
          <div className="card infocard"  >
            <div className="glass"></div>
            <div className="infocard-content">
              <div className="infocard-title">Basic functionality</div>
              <div className="infocard-exbox">
                <div>Trying to Say:</div>
                <div className="infocard-info">
                  <div>Weather in Mumbai (location)</div>
                  <div>show me full weather report for Mumbai</div>
                  <div>Open Youtube</div>
                  <div>Open Google</div>
                  <div>Open Whatsapp</div>
                  <div>Open Gmail</div>
                  <div>Search best javascript framwork</div>
                  <div>Search advance javascript in Youtube </div>
                  <div>etc...</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </div>
              </div>

            </div>
          </div>

          <div className="card infocard"  >
            <div className="glass"></div>
            <div className="infocard-content">
              <div className="infocard-title">small talks</div>
              <div className="infocard-exbox">
                <div>Trying to Say:</div>
                <div className="infocard-info">
                  <div>Talk to me</div>
                  <div>Where are you</div>
                  <div>Talk about yourself</div>
                  <div>tell me about your boss</div>
                  <div>for what reason you are created</div>
                  <div>what you can do</div>
                  <div>are you good or bad</div>
                  <div>Who is your boss</div>
                  <div>You are funny</div>
                  <div>Will you marry me</div>
                  <div>Are we friends</div>
                  <div>etc...</div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="card infocard" >
            <div className="glass"></div>
            <div className="infocard-content">
              <div className="infocard-title">Calculation</div>
              <div className="infocard-exbox">
                <div>Trying to Say:</div>
                <div className="infocard-info">
                    <div>calculate 5 plus 5</div>
                    <div>what is 2 multiply by 2</div>
                    <div>how much is 60 minus 10</div>
                    <div>compute 6 divide by 2</div>
                    <div>what is square root of 5</div>
                    <div>etc...</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </div>
              </div>

            </div>
          </div>

          

          

      </div>    
    );
  }

  return (
    <div className='newscard-grid'>
        {articles.map((article,i)=>(<NewsCard article={article} activeArticle={activeArticle} i={i}/>))}
    </div>
  )
}

export default NewsCards