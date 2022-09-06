import React from "react";

class FeatureSection extends React.Component{
render(){
    return(
    <section className="features p-5">
        <div className="container">
        <h1 className="text-center fw-bold text-blue">Our features</h1>
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
                
              <img src={require('../images/carousel2.jpg')} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={require('../images/carousel1.jpg')} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={require('../images/carousel3.png')} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
}

export default FeatureSection