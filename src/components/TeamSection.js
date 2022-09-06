import React from "react";

class TeamSection extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
                 <section className="team p-5">
  <div className="container">
    <h1 className="text-center text-blue fw-bold">Our team</h1>
    <div className="row m-5">
        {this.props.teamMembers.map((el)=>(
            <div  className="col-md-4 mb-3">
            <div key={el.id} className="card shadow border-0">
            <div className="card-body">
            <img className="card-img-top"
                  alt="my pic" src={require('../images/mypic.jpg')}/>
            <h1 className="card-title fw-bold">{el.nom}</h1>
            <p className="card-text">
            {el.text}
            </p>
          </div>
        </div>
            </div>
        ))}
    </div>
  </div>
</section>

        )
    }
}


export default TeamSection