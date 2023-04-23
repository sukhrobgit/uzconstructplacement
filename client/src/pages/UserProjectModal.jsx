import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectItem } from '../actions/projectActions';

function UserProjectModal() {
  const dispatch = useDispatch()
  const userSignIn = useSelector(state => state.userSignIn)
  const {userInfo} = userSignIn


  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState(userInfo._id)
  const [title, setTitle] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [desc, setDesc] = useState()
  const [location, setLocation] = useState()
  const [projectStatus, setProjectStatus]= useState('reviewing')


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formSubmitHandler =()=>{
    dispatch(createProjectItem(userId, title, imgUrl, desc, location, projectStatus ))

}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit a project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit your project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3" controlId="UserProjectModalForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mansion House"
                autoFocus
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="UserProjectModalForm.ControlInput1">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                autoFocus
                value ={imgUrl}
                onChange={(e)=>setImgUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="UserProjectModalForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="UserProjectModalForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3}
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              />
            </Form.Group>
            <Button type='submit' variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserProjectModal;
