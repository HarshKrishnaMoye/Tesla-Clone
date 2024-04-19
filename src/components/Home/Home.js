  import React from 'react'
  import Section from '../Section/Section'
  import Main from '../Main/Main'
  import Header from '../Header/Header';
  import image1 from '../../images/model-s.jpg'
  import image2 from '../../images/model-y.jpg'
  import image3 from '../../images/model-3.jpg'
  import image4 from '../../images/model-x.jpg'
  import image5 from '../../images/solar-panel.jpg'
  import image6 from '../../images/solar-roof.jpg'
  import image7 from '../../images/Powerwall.jpg'
  import image8 from '../../images/accessories.jpg'
  

  function Home() {
    return (
      <div className="container">
          <Header/>
          <Main id="Main" title="Find the Tesla for You" description="Discover which model is best for you based on your budget, driving habits and lifestyle." rightButton="Help Me Choose"/>
        
          <Section  title="Model S" description="Order Online for Touchless Delivery" bgImage={image1} leftButton="Custom order" rightButton="Existing inventory"/>

          <Section title="Model Y" description="Order Online for Touchless Delivery" bgImage={image2} leftButton="Custom order" rightButton="Existing inventory"/>

          <Section  title="Model 3" description="Order Online for Touchless Delivery" bgImage={image3} leftButton="Custom order" rightButton="Existing inventory"/>

          <Section title="Model X" description="Order Online for Touchless Delivery" bgImage={image4} leftButton="Custom order" rightButton="Existing inventory"/>

          <Section  title="Lowest Cost Solar Panels in America" description="Money-back guarantee" bgImage={image5} leftButton="Order now" rightButton="Learn more"/>

          <Section  title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" bgImage={image6} leftButton="Order now" rightButton="Learn more"/>

          <Section  title="Powerwall" description="" bgImage={image7} leftButton="Order now" rightButton="Learn more"/>       

          <Section  title="Accessories" description="" bgImage={image8} leftButton="Shop now"/>
      </div>
    )
  }

  export default Home


