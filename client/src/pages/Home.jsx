import React, { useEffect } from "react";
import PortfolioCard from "../components/Card";
import CarouselHome from "../components/CarouselHome";
import { useDispatch, useSelector } from "react-redux";
import NavbarGen from "../components/NavbarGen";
import StaffCard from "../components/StaffCard";
import Footer from "../components/Footer";
import { listPortfolioItem } from "../actions/portfolioActions";

function Home() {

  
const dispatch  = useDispatch();
const {portfolio} = useSelector(state => state.portfolioList)
useEffect(()=>{
  document.title = "HOME";
  dispatch(listPortfolioItem())
},[dispatch])


const homePortfolio = portfolio.slice(0,3)
console.log(homePortfolio);


  let parag =
    "Some quick example text to build on the card title and make up the bulk of the cards content.";
  let imageLink =
    "https://media.istockphoto.com/id/1226870245/photo/tower-crane-and-building-construction-site-silhouette-at-sunrise.jpg?s=612x612&w=0&k=20&c=RXrA6nevildDAKrbPV8VktWFJGBnf7vg3kmry6Br7pY=";
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;



  return (
    <div className="home">
      {/* <NavbarGen/> */}
      <CarouselHome className={"home__carousel"} />

      <div className="home__body">
        <div className="home__about-us">
          <h2 className="home__about-us__header">UZCONSTRUCT</h2>

          <p>
           UzConstruct is a construction company located in the heart of East
            London. Our team of skilled professionals is dedicated to providing
            high-quality construction services to our clients. AtUzConstruct, we
            believe that every construction project should be a reflection of
            the client's vision, and we work closely with our clients to ensure
            that their needs are met.
          </p>

          <div className="home__about-us__read-more">
            <a href="#">Read more</a>
          </div>
        </div>

        {/* //*Portfolio */}
        <div className="home__portfolio-container">
        <h2>PROJECTS</h2>
        <div className="home__portfolio">

          { homePortfolio.map(e =>{
             return <PortfolioCard
               img={e.image}
               title={e.title}
               paragraph={e.desc}
               anchorLink={"#"}
             />
          })}
       
         

          {/* //*Portfolio */}
        </div>
        </div>
        

        {/* //*Team */}

        <div className="team">
          <div className="team__intro">
          <h2 className="team__header">TEAM</h2>
          <p>
            At Sukhrob.co, we have a highly skilled and experienced team of
            construction professionals who are dedicated to delivering
            exceptional results. Our team includes architects, engineers,
            project managers, and skilled tradespeople who work together to
            ensure that every project is completed to the highest standards.
          </p>
          </div>
        
          <div className="home__staff-cards">
            <StaffCard 
            className={'staff-card'}
              role={"CEO"}
              staffName={"Sukhrob"}
              image={
                "https://media.licdn.com/dms/image/C4E03AQF5WsIhw9V5rQ/profile-displayphoto-shrink_400_400/0/1654268887502?e=1686182400&v=beta&t=xgxiwIzxalwFzV5N-9wuSMIChsdAB036qrd79VevhWY"
              }
              body={
                "UzConst Group is a family business led by Sukhrob, who as one of the founding partners has spent all his entire working life involved in ..."
              }
            />
            <StaffCard 
            className={'staff-card'}
              role={"Co-founder"}
              staffName={"Alpomish"}
              image={
                "data:image/jpeg;base64,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"
              }
              body={
                "UzConst Group is a family business led by Sukhrob, who as one of the founding partners has spent all his entire working life involved in ..."
              }
            />
            <StaffCard 
            className={'staff-card'}
              role={"Commercial Director"}
              staffName={"Teshavoy"}
              image={'data:image/jpeg;base64,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'}
              body={
                "UzConst Group is a family business led by Sukhrob, who as one of the founding partners has spent all his entire working life involved in ..."
              }
            />
           
          </div>
        </div>


      </div>

      {/* <div className="home__footer">
          <Footer/>
        </div> */}
    </div>
  );
}

export default Home;
