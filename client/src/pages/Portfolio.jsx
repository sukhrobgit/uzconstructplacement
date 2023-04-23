import React, { useEffect } from 'react'
import PortfolioCard from '../components/Card'
import {useDispatch, useSelector } from 'react-redux'
import { listPortfolioItem } from '../actions/portfolioActions'
import { deletePortfolioItem } from '../actions/portfolioActions'
import CarouselHome from '../components/CarouselHome'

function Portfolio() {
  const dispatch = useDispatch()
  const portfolioList = useSelector(state => state.portfolioList)
  const {portfolio } = portfolioList;
  useEffect(()=>{
    document.title = "PORTFOLIO";
    dispatch(listPortfolioItem())
 
  }, [dispatch, portfolio]
  )

  
  return (

    <div className='portfolio'>
      <CarouselHome/>

    <div className="portfolio__container">

      <div className="portfolio__info">
        <h2>PROJECTS</h2>
        <p>We are award winning developers of prestigious, beautiful new homes in North London,  Hertfordshire and the home counties, and are extremely proud of the luxury developments of pre-planned and bespoke homes that we have built since 2002. We have gained an unrivalled reputation for maintaining the highest standards of quality, attention to detail and personal customer service.</p>
      </div>

      {/* <div className="portfolio-cards-public"> */}


<div className="portfolio__cards-public">


    { 
    portfolio.map(e=>{
      return <PortfolioCard className={"portfolio__card"}  key={e._id} portfolioItemId={e._id}  title={e.title} img={e.image} />
    })
     
    }
          </div>
    </div>
    </div>
  )
}

export default Portfolio
