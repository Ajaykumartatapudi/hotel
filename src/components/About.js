import React from 'react';

const backgroundImageUrl = 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740';

const About = () => {
  return (
    <div
  style={{
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // start from top
    textAlign: 'left',
    padding: '5% 15%',
  }}
>
  {/* Dark overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    }}
  ></div>

  {/* Text and cards wrapper */}
  <div style={{ position: 'relative', zIndex: 2 }}>
    <h1 className="display-3 fw-bold mb-3">Welcome to BookHo</h1>
    <p className="lead fs-4">Your smart hotel booking Website</p>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
      Discover and book from thousands of hotels, whether you’re planning a relaxing getaway or a business trip.
      With BookHo, enjoy seamless browsing, unbeatable prices, and exclusive deals tailored just for you.
      Experience hassle-free reservations with 24/7 customer support, making your travel planning as smooth as possible.
      Let us help you find the perfect stay for every occasion!
    </p>

    {/* Cards below text */}
    <div className="row justify-content-center " style={{marginTop:"120px"}}>
      {[
        { title: 'Wide Selection', text: 'Thousands of hotels worldwide.' },
        { title: 'Best Prices', text: 'Find the best deals only on BookHo.' },
        { title: '24/7 Support', text: 'Customer service ready anytime.' },
      ].map(({ title, text }, index) => (
        <div
          key={index}
          className="col-md-4 mb-4"
          style={{
            animation: 'popUp 0.6s ease forwards',
            animationDelay: `${index * 0.2}s`,
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style>{`
    @keyframes popUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</div>
)
}
export default About;
