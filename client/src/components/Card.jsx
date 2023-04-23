import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import Delete from '../pages/admin/adminModals/Delete';
import PortfolioUpdateModal from '../pages/admin/adminModals/PortfolioUpdateModal';

function PortfolioCard({item, portfolioItemId, img, title, paragraph, deleteHandler, anchorLink,}) {
  const userSignIn = useSelector(state => state.userSignIn)
  const {userInfo} = userSignIn
  const [portfolioItem, setPortfolioItem] = useState('')

  return (
    <Card style={{ width: '18rem' }} className="portfolio-card" >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
     {paragraph}
        </Card.Text>
      

      {
        userInfo?.isAdmin?
        <div className="admin-btns-container">
          <PortfolioUpdateModal className="admin-btns"  portfolioItemId={portfolioItemId} img={img}   title={title} paragraph={paragraph}/> 
          <Delete className="admin-btns" item={item} portfolioItemId={portfolioItemId} itemType={"Portfolio item"} body={`Are you sure you want to delete ${title} ?` }/>
        </div>
        :
        ""
      }
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
