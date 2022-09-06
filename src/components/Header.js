
import React from "react"
import '../App.css'


class Header extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
                    <div className="container p-4">
                            <a className="navbar-brand" href="./index.html">FakeLogo</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">   
                                {this.props.items&&this.props.items.map((it)=>(
                                <li key={it.id} className="nav-item">
                                <a className={it.id="1"?"nav-link active":"nav-link"} href="#">{it.text}</a>
                                </li>
                                ))}
                                </ul>
                         </div>
                    </div>
                </nav>
            </header>

        )
    }
}


export default Header