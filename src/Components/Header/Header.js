import "./Header.css";
import React from "react";



class Header extends React.Component {
    constructor() {
        super();
        this.state={
          show:true,
        }
      }
    render() {
        return  <div className="header-backround py-5">
        <div id="nav" className="sticky-nav">
  <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand text-white" href="#">BrandName</a>
    <button className="navbar-toggler border border-info"  onClick={() => {this.setState({show: !this.state.show})}}>
                    <span class="navbar-toggler-icon"></span>
                    <span></span>
                    <span></span>
                  </button>
               
    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'  }>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Pricing</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn text-white shadow-none" type="submit">Login</button>
        <button className="btn btn-primary">Become a member</button>
       </form>
    </div>
  </div>
</nav>
</div>
<div class="head-container">
          <h1 class="heading">Creating a Beautifull & Usefull Solutitons</h1>
          <p class="paragraph1">We know how large objects will act, but things on a 
            small scale just do not act that way.</p>
            <div class="head-btn">
                <button class="btn  btn-outline-primary text-white active rounded-pill me-3">Get Quote Now</button>
                <button class="btn btn-outline-primary text-white rounded-pill">Learn More</button>
            </div>
        </div>
</div>
    }
}
export default Header