import React from 'react'

function AboutUsContentSection(props) {
  return (
    <div className='AboutUsContentSection'>
        <h2>{props.title}</h2>

        <div className="info-image">
            <div className="image">

            <img src={props.image} alt="about image here" srcset="" />
            </div>

            <div className="text">
        <p>{props.text}</p>

            </div>
        </div>
    </div>
  )
}

export default AboutUsContentSection
