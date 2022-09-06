import React from "react"
class HeroSection extends React.Component{
    render(){
        return(
            <>
            <section className="hero bg-blue">
            <div className="container hero-content">
            <div className="row">
                 <div className="col-md-6 d-flex align-items-center">
                    <div>
                    <h1 className="text-white fw-bold">Welcome to our website</h1>
                    <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Neque tempore delectus, earum repudiandae quis rem, voluptates
                    officia iure cupiditate praesentium repellat ad, ea totam
                    expedita iste ipsam eveniet. Illum, beatae!
                     </p>
                     <button className="btn btn-warning">Join now</button>
                     </div>
                    </div>
                    <div className="col-md-6">
                 <img src={require('../images/rightHeroImage.png')} width={400} alt="right content" />
                     </div>
                </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L26.7,261.3C53.3,267,107,277,160,240C213.3,203,267,117,320,101.3C373.3,85,427,139,480,154.7C533.3,171,587,149,640,160C693.3,171,747,213,800,234.7C853.3,256,907,256,960,261.3C1013.3,267,1067,277,1120,256C1173.3,235,1227,181,1280,165.3C1333.3,149,1387,171,1413,181.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </section>


            </>

        )
    }
}

export default HeroSection