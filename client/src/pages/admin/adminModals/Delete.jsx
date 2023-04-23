import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deletePortfolioItem } from '../../../actions/portfolioActions';
import { useDispatch } from 'react-redux';

function Delete(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const dispatch = useDispatch()
//   const deletePortfolioItem = ()=>{
//     dispatch(deletePortfolioItem(props.portfolioItemId))
//   }


const delPortfolio = ()=>{
    dispatch(deletePortfolioItem(props.portfolioItemId))
    handleClose()

}

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {props.itemType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={delPortfolio}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete
