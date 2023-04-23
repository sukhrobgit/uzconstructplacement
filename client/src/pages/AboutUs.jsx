import React from 'react'
import CarouselHome from '../components/CarouselHome'
import AboutUsContentSection from '../components/AboutUsContentSection'

function AboutUs() {
  return (
    <div className='about-us-page'>
    
      <CarouselHome className={"about__carousel"} />

    <div className="about-us-content">

    <div className="top">
    <h1>ABOUT US</h1>
      <p>
      
        Award winning developers of prestigious, beautiful new homes in North London, North West London and the Home Counties, we are extremely proud of the luxury developments that we have built over the last 18 years. We have gained a reputation for maintaining the highest standards of quality, attention to detail and personal client service.
      </p>

    </div>

    <div className="content">
    <AboutUsContentSection title={"WHAT WE DO"} image={'https://www.heronslea.net/wp-content/uploads/2015/10/HeronsL27LR-304x302.jpg'}
     text={"Our professional expertise in all aspects of building bespoke new homes is unrivalled; from buying land and working with planning authorities to gaining the necessary permissions, to designing and building bespoke homes with today’s lifestyle in mind for discerning clients.Heronslea are proud to offer clients a complete and comprehensive service, from choosing the optimum location at the project’s inception to handing over the keys to a stunning interior designed home. Our bespoke services are there to assist clients at every stage from conception to completion. Heronsleas’ skills extend from site identification to interior design and aftercare. We make sure you have a beautiful interior, exterior and living space to provide a stunning home that reflects our high quality finish combined with a personal touch. We have become the company of choice for those seeking a home of distinction."} />
   
    <AboutUsContentSection title={"ABOUT"} image={'https://media.licdn.com/dms/image/C4E03AQF5WsIhw9V5rQ/profile-displayphoto-shrink_400_400/0/1654268887502?e=1686182400&v=beta&t=xgxiwIzxalwFzV5N-9wuSMIChsdAB036qrd79VevhWY'}
     text={"Founded in 2002, UzConst is a family business and a private company with over 50 years combined experience in the property sector. This fast growing residential developer specialises in building prestigious, beautiful, new homes in prime areas and ‘super suburbs’ of North London, Hertfordshire and the Home Counties. UzConst takes pride in each of its developments which range from one–off houses to large scale developments, the hallmarks of which are quality, fine design and attention to detail.The Group builds in prime locations and its success is attributed to its relationships with the local area and community, with each scheme designed to seamlessly blend in with its surroundings, whilst having its own style and design. Homes appeal to a wide range of buyers from families, professionals and empty nesters, whether its downsizing or upsizing, or just wanting to live in a Heronslea home. UzConst is constantly"} />
   
    <AboutUsContentSection title={"DESIGN"} image={'https://www.heronslea.net/wp-content/uploads/2019/03/8010-304x302.jpg'}
     text={"Our professional expertise in all aspects of building bespoke new homes is unrivalled; from buying land and working with planning authorities to gaining the necessary permissions, to designing and building bespoke homes with today’s lifestyle in mind for discerning clients.Heronslea are proud to offer clients a complete and comprehensive service, from choosing the optimum location at the project’s inception to handing over the keys to a stunning interior designed home. Our bespoke services are there to assist clients at every stage from conception to completion. Heronsleas’ skills extend from site identification to interior design and aftercare. We make sure you have a beautiful interior, exterior and living space to provide a stunning home that reflects our high quality finish combined with a personal touch. We have become the company of choice for those seeking a home of distinction."} />
   


    </div>

    </div>
      </div>
  )
}

export default AboutUs
