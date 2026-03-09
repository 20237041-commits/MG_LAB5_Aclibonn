// Pages/Home.js
import CarouselFadeExample from '../CarouselFadeExample';
import EventHandling from '../EventHandling';

function Home() {
  return (
    <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <br />
      <h1 style={{ padding: "25px 0", textAlign: "center" }}>Precision Engineering for Every Road</h1>
      <h3 style={{textAlign:'center'}}>The Future of Auto Maintenance</h3>
  
      
      
      {/* The Carousel only lives here now */}
      <CarouselFadeExample />

      <br />
      <h1 style={{ textAlign: "center" }}>Upgrade Your Driving Experience</h1>

      {/* The Form only lives here now */}
      <EventHandling />
    </div>
  );
}

export default Home;