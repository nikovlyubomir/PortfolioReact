import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';


export class LandingPage extends Component {
    render() {
        return (
            <div style={{width:"100%" , margin: "auto"}}>
              
              <Grid className="landing-grid">
                <Cell col={12}>
                <img data-aos="fade-up" data-aos-duration="2500" src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                  alt="avatar"
                  className="avatar-image"/>
                <div className="bannerText">
                  <h1>Software Developer</h1>
                  <hr></hr>
                  <p data-aos="fade-up">HTML/CSS | Sass | JavaScript | React | Java | MySQL</p>
                  <div className="icons">
                   <a href="http://facebook.com" target="_blank"><i class="fa fa-facebook"></i></a>
                   <a href="http://linkedin.com" target="_blank"><i class="fa fa-linkedin"></i></a>
                   <a href="http://github.com" target="_blank"><i class="fa fa-github"></i></a>
                  </div>
                </div>
                </Cell>
              </Grid>
              
            </div>
        )
    }
}

export default LandingPage
