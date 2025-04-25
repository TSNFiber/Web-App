
import Header from './Header';  
import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

 
  const handleCarousel = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % 3;
    } else {
      newIndex = (currentIndex - 1 + 3) % 3;
    }
    setCurrentIndex(newIndex);
  };

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollButtonVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <header>
        <Header>

        </Header>
        
        <div className="hero-content">
          <div className="centered-content">
            <h2 className="slogan">
              LEVELUP Your Style<br/>
              Gear Up Like a Gamer
            </h2>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </header>

     
      <section className="product-showcase">
        <div className="product-container">
          <div className="product-images">
            <img 
              src="/assets/images/3.webp" 
              className={currentIndex === 0 ? 'active' : ''} 
              alt="Product 1" 
            />
            <img 
              src="/assets/images/2.webp" 
              className={currentIndex === 1 ? 'active' : ''} 
              alt="Product 2" 
            />
            <img 
              src="/assets/images/1.webp" 
              className={currentIndex === 2 ? 'active' : ''} 
              alt="Product 3" 
            />
            <button className="carousel-btn prev" onClick={() => handleCarousel('prev')}>
              ‹
            </button>
            <button className="carousel-btn next" onClick={() => handleCarousel('next')}>
              ›
            </button>
          </div>

          <div className="product-details-container">
            <div className={`product-details ${currentIndex === 0 ? 'active' : ''}`}>
              <h2>Caryll Runes</h2>
              <p>
                Screenprinted on the Memory Altar. This 100% cotton official Bloodborne long-sleeved shirt was designed by Tony Kuchar with three print locations and a sewn Bloodborne logo tag. Each one comes with a bonus button.
              </p>
              <button className="buy-button">Buy Now</button>
            </div>

            <div className={`product-details ${currentIndex === 1 ? 'active' : ''}`}>
              <h2>Hornet Mini Figurine</h2>
              <p>
                I have seen this nimble little teeny-tiny creature. This official Hollow Knight mini-figurine was modeled by Alex Colvin and stands about 3.4 inches tall.
              </p>
              <button className="buy-button">Buy Now</button>
            </div>

            <div className={`product-details ${currentIndex === 2 ? 'active' : ''}`}>
              <h2>The Spire Awaits</h2>
              <p>
                Choose your cards wisely. This official Slay the Spire t-shirt was designed by Nina Matsumoto and printed by Forward on soft 100% cotton shirts from Canvas and District.
              </p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="games-section">
        <h2 className="section-title">Browse by Games</h2>
        <div className="games-grid">
          <Link to="/Fortnite" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/Fortnite.jpg" alt="Fortnite" className="game-image"/>
            </div>
            <h3 className="game-title">Fortnite</h3>
          </Link>
          
          <Link to="#" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/Split fiction.avif" alt="Split Fiction" className="game-image"/>
            </div>
            <h3 className="game-title">SPLIT FICTION</h3>
          </Link>
          
          <Link to="#" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/apex.jpeg" alt="Apex Legends" className="game-image"/>
            </div>
            <h3 className="game-title">Apex Legends</h3>
          </Link>
          
          <Link to="#" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/GTA.jpg" alt="GTA V" className="game-image"/>
            </div>
            <h3 className="game-title">Grand Theft Auto V</h3>
          </Link>
          
          <Link to="#" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/Genshin.jpeg" alt="Genshin Impact" className="game-image"/>
            </div>
            <h3 className="game-title">Genshin Impact</h3>
          </Link>
          
          <Link to="#" className="game-card">
            <div className="image-wrapper">
              <img src="/assets/images/LOL.jpeg" alt="League of Legends" className="game-image"/>
            </div>
            <h3 className="game-title">League Of Legends</h3>
          </Link>
        </div>
      </section>
      <footer class="site-footer">
    <div class="footer-content">
        <p class="copyright">&copy; 2023 Merchy. All rights reserved</p>
        
    </div>
</footer>

      
      {scrollButtonVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default Home;