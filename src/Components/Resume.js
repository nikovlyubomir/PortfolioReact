import React, { Component } from 'react';
import {Grid,Cell,Button} from 'react-mdl';


class Resume extends Component {
    render() {
        return (
         <div>
             <Grid className="resume-layout">
                <Cell col={4} data-aos="fade-right" data-aos-duration="600">
                <div className="resume-intro" style={{textAlign:'center'}}>
                    <div data-aos="fade-right" data-aos-duration="3000">
                        <img src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/10312584_10200959093697840_4382199538871505705_n.jpg?_nc_cat=111&_nc_oc=AQlhbLmfFO2nGWs6M_zc3lKlUxWKcU99m0EcXHJftUZ6j_XE_boNd_Nl9HucAD04MwE&_nc_ht=scontent-dus1-1.xx&oh=f39772c4210afda60d9e808c240afb60&oe=5E3100FD"
                        alt="avatar"
                        style={{height:'280px',borderRadius:"200px"}}/>                     
                    </div>
                   
                        <h2 style={{paddingTop:"1rem"}}>Lyubomir Nikov</h2>
                        <h4>Programmer</h4>
                        <hr style={{borderTop:"3px solid #833fb2" , width:"100%"}}/>
                        <p style={{fontSize:"20px", width:"100%"}}>Upcoming BE graduate offering a strong foundation in software engineering
                            and programming principles across multiple platforms. Passionate about
                            implementing and launching new projects. Ability to translate business
                            requirements into technical solutions. Looking to start the career as an
                            entry-level software engineer.</p>
                </div>
                </Cell>
               
                <Cell className="resume-right-col" col={8}>
                    <div style={{fontStyle: "italic",borderBottom:"3px dotted black", textAlign:"center"}}><h1>Curriculum Vitae</h1>
                    
                    </div>
                    <div className="resume-education">
                        <h1><i class="fa fa-university"></i> Education</h1>
                        <h3>B.E. in ICT Engineering, VIA University College</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}> &bull; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus ducimus perspiciatis atque ipsa odit illum repellendus, libero vitae nobis, alias nam quod nemo quo, error voluptatibus inventore asperiores eligendi!</p>
                        <h3>Foreign Language High school "Simeon Radev"</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium minus ducimus perspiciatis atque ipsa odit illum repellendus, libero vitae nobis, alias nam quod nemo quo, error voluptatibus inventore asperiores eligendi!</p>
                        
                    </div>
                    <div className="resume-expirience"  >
                        <h1><i class="fa fa-briefcase"></i> Experience</h1>
                        <h3>Aastiderne A/S</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; Part time job to support my study activity and stay in Denmark. Gathered
                        skills in logistics, cooperation, teamworking and product quality control.</p>
                    </div>
                    <div className="resume-progskills">
                        <h1><i class="fa fa-laptop"></i>Programming skills</h1>
                        <h3>Programming Languages</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}><strong>&bull; Profficient</strong>: Java,HTML5,CSS3,JavaScript</p>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}><strong>&bull; Familiar</strong>: Python, PHP, C#</p>
                        <h3>Frameworks & Libraries</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; React, React-MDL</p>
                        <h3>Databases</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; MySQL, Firebase</p>
                        <h3>Testing</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; JUnit</p>
                        <h3>Technologies & Frameworks</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; Eclipse, Visual Studio, IntelliJ IDEA,
                        Visual Studio Code, Maven, Git, Tomcat, Apache, Wamp, Git, RESTful API,
                        Ajax/Fetch API</p>
                        <h3>Software Developement</h3>
                        <p style={{fontSize:"20px", paddingLeft:'20px'}}>&bull; Scrum</p>
                    </div>
                  
                </Cell>

             </Grid>
         </div>
        )
    }
}

export default Resume
