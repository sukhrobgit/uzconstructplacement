import React, { useEffect } from 'react'
import PortfolioModal from './adminModals/PortfolioModal'
import PortfolioCard from '../../components/Card'
import {useDispatch, useSelector } from 'react-redux'
import { listPortfolioItem } from '../../actions/portfolioActions'
import { deletePortfolioItem } from '../../actions/portfolioActions'

function AdminPortfolio() {
  const dispatch = useDispatch()
  const portfolioList = useSelector(state => state.portfolioList)
  const {portfolio } = portfolioList;
  useEffect(()=>{
    document.title = "PORTFOLIO";
    dispatch(listPortfolioItem())
 
  }, [dispatch, portfolio]
  )

  
  return (

    <div className='admin-portfolio'>
    <PortfolioModal className={"portfolio-create-modal"}/>

    <div className="admin-portfolio__container">

    { 
    portfolio.map(e=>{
      return <PortfolioCard  key={e._id} portfolioItemId={e._id}  title={e.title} img={e.image} paragraph={e.desc}/>
    })
     
    }
    </div>
    </div>
  )
}


export default AdminPortfolio
