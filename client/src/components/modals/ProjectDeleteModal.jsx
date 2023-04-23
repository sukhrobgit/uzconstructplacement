import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import { delProject } from '../../actions/projectActions';

function ProjectDeleteModal(props) {
  const [show, setShow] = useState(false);
  console.log(props.projectId, 'LOOKIK');
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const dispatch = useDispatch()
//   const delProjects = ()=>{
//     dispatch(delProjects(props.portfolioItemId))
//   }


const delProjectHandler = ()=>{
    dispatch(delProject(props.projectId))
    handleClose()

}

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={delProjectHandler}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectDeleteModal
