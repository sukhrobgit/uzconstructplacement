import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createPortfolioItem, updatedPortfolioItem } from '../../../actions/portfolioActions';
import axios from 'axios';
const validFileTypes= ['image/jpg', 'image/jpeg', 'image/png']

function PortfolioUpdateModal(props) {

  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [portfolioItemId,setPortfolioItemId ] = useState('')
  const [title, setTitle] = useState('');
  const [ image, setImage] = useState('');
  const [desc, setDesc] = useState('')
  const {userSignIn} = useSelector((state)=>state)
  const {userInfo}  = userSignIn;

  const [loadingUpload, setLoadingUpload] = useState(false)
  const [errorUpload, setErrorUpload] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const portfolioItemUpdate = (e)=>{

      dispatch(updatedPortfolioItem( portfolioItemId,title, image, desc))
  }

  useEffect(()=>{
    if(props){
        setPortfolioItemId(props.portfolioItemId);
        setTitle(props.title);
        setImage(props.img);
        setDesc(props.paragraph)
    }
  }, [props])

  const imageUploadHandler = async (e)=>{
    const file = e.target.files[0];

    if(!validFileTypes.find(type=> file.type)){
      setErrorUpload("Only JPG/PNG formats")
      return
    }

    const bodyFormData = new FormData();
    bodyFormData.append("image",file)
    setLoadingUpload(true)

    try{
      const {data} = await axios.post("/api/uploads/s3", bodyFormData,{
        headers:{
          "Content-Type":'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        }
       
      },

      )
      setImage(data);
      setLoadingUpload(false);
    }catch(error){
      console.log(error);
      setErrorUpload(error.message)
      setLoadingUpload(false)
    }
  }


  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={portfolioItemUpdate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Control type='text' value={image} onChange={(e)=>setImage(e.target.value)}   />
            {/* <Form.Control onChange={imageUploadHandler} type={'file'}/> */}
            {errorUpload &&  <div className='errorUpload'>{errorUpload}</div>}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
          
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={desc} onChange={(e)=>setDesc(e.target.value)} />
            </Form.Group>
            <Button type='submit' variant="primary" onClick={handleClose}>
            Save
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


export default PortfolioUpdateModal;
