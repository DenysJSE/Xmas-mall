import './Home.css'
import image from "../../images/HomeBackground.jpg";

function Home() {
  return (
    <>
      <div style={{backgroundImage: `url(${image})`}} className='xmas-mall'>
        <h1 className='home-page-title'>Merry Christmas</h1>
      </div>
    </>
  );
}

export default Home
