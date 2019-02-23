import React, { Component } from 'react';
class carousel extends Component {
    render() {
      
  
      return (
        <div id="demo" className="carousel slide" data-ride="carousel">
             <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles" width="1100" height="500"/>
                <div class="carousel-caption">
                    <h3>Los Angeles</h3>
                    <p>We had such a great time in LA!</p>
                </div>   
                </div>
                <div class="carousel-item">
                <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago" width="1100" height="500"/>
                <div class="carousel-caption">
                    <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p>
                </div>   
                </div>
                <div class="carousel-item">
                <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York" width="1100" height="500"/>
                <div class="carousel-caption">
                    <h3>New York</h3>
                    <p>We love the Big Apple!</p>
                </div>   
                </div>
            </div>
        </div>
      );
    }
  }

  export default carousel;