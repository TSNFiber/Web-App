
import Header  from './Header'; 
import React, { useState, useEffect } from 'react';
import './style2.css';


function Fortnite() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showScrollButton, setShowScrollButton] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const products = [
    { category: 'funko', img: 'funko 1.jpeg', name: 'Fortnite Funko #1' },
    { category: 'funko', img: 'funko 2.webp', name: 'Fortnite Funko #2' },
    { category: 'funko', img: 'funko 3.jpg', name: 'Fortnite Funko #3' },
    { category: 'funko', img: 'funko 4.jpg', name: 'Fortnite Funko #4' },
    { category: 'funko', img: 'funko 5.webp', name: 'Fortnite Funko #5' },
    { category: 'hoodie', img: 'hoodie 1.jpeg', name: 'Fortnite Hoodie #1' },
    { category: 'hoodie', img: 'hoodie 2.jpeg', name: 'Fortnite Hoodie #2' },
    { category: 'hoodie', img: 'hoodie 3.jpeg', name: 'Fortnite Hoodie #3' },
    { category: 'mousepad', img: 'mousepad 1.jpeg', name: 'Fortnite Mousepad #1' },
    { category: 'mousepad', img: 'mousepad 2.jpeg', name: 'Fortnite Mousepad #2' },
    { category: 't-shirt', img: 'T-shirt 1.webp', name: 'Fortnite T-Shirt #1' },
    { category: 't-shirt', img: 'Tshirt 2.jpeg', name: 'Fortnite T-Shirt #2' },
    { category: 't-shirt', img: 'Tshirt 3.jpeg', name: 'Fortnite T-Shirt #3' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className='container'>
      <header>
        
        <Header>
           
        </Header>
        <div className="hero-content2">
          <div className="centered-content"></div>
        </div>
      </header>

      <section className="drops-link">
        <div className="drops-link"></div>
      </section>

      <section className="drops">
        <div className="drops">
          <h1 className="slogan">
            LEVELUP Your Style<br/>
            with our new Fortnite Drops!
          </h1>
          <button className="buy-button">Buy Now</button>
        </div>
      </section>

      <section className="shop-section">
        <div className="shop-container">
          <div className="filters">
            <h3 className="filter-title">Filter</h3>
            <ul className="filter-list">
              {['all', 't-shirt', 'funko', 'keyboard', 'hoodie', 'mouse', 'mousepad'].map((category) => (
                <li
                  key={category}
                  className={`filter-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  data-category={category}
                >
                  {category.replace('-', ' ').toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          <div className="products-container">
            <div className="products-scroller">
              {filteredProducts.map((product, index) => (
                <a href="#" key={index} className="product-link">
                  <div className="product-card" data-category={product.category}>
                    <img 
                      src={`/assets/images/Fortnite/${product.img}`} 
                      alt={product.name}
                      className="product-image"
                    />
                    <h4 className="product-title">{product.name}</h4>
                    <div className="product-info">
                      <span className="rating">⭐ 98%</span>
                      <span className="price"> $29.99</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <footer className="site-footer">
    <div className="footer-content">
        <p className="copyright">&copy; 2023 Merchy. All rights reserved</p>
        
    </div>
</footer>
      </section>
      

      {showScrollButton && (
        <button className="back-to-top" onClick={scrollToTop}>
           ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default Fortnite;