import React, { Component } from 'react';
import {Tabs,Tab,Card,CardTitle,CardActions, CardMenu, Button, CardText, IconButton, Grid, Cell} from 'react-mdl';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Aoss = AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const JavaProjects = () =>{
    return(
        <div  className="projects-grid" >
        {/*Project 1 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}} data-aos="zoom-in-right" data-aos-duration="2100">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>
               
               
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center", paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       {/*Project 2 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px", backgroundColor:"#f4f4f4"}} data-aos="zoom-in-left">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       </div>

)};

const WebProjects = () =>{
    return(
        <div  className="projects-grid"  data-aos="zoom-in-right" data-aos-duration="1000">
        {/*Project 1 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}}>
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://www.compuskills.com/wp-content/uploads/2017/11/html5-css3.jpg) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>              
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center", paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       {/*Project 2 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}} data-aos="zoom-in-down" data-aos-duration="2000">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://www.compuskills.com/wp-content/uploads/2017/11/html5-css3.jpg) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
        {/*Project 3 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px", backgroundColor:"#f4f4f4"}}data-aos="zoom-in-left" data-aos-duration="3000">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://www.compuskills.com/wp-content/uploads/2017/11/html5-css3.jpg) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       </div>
)};

const JavaScript = () =>{
    return(
        <div  className="projects-grid">
        {/*Project 1 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}}data-aos="zoom-in-right">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MfnuLmnxxNOmitx5jrlmZfhsO-o_42WPTXQk9frY9JKvQx0J) center/ cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>              
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center", paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       {/*Project 2 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}}data-aos="zoom-in-down">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MfnuLmnxxNOmitx5jrlmZfhsO-o_42WPTXQk9frY9JKvQx0J) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
        {/*Project 3 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px", backgroundColor:"#f4f4f4"}} data-aos="zoom-in-left">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MfnuLmnxxNOmitx5jrlmZfhsO-o_42WPTXQk9frY9JKvQx0J) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       </div>
)};

const ReactProjects = () =>{
    return(
        <div  className="projects-grid">
        {/*Project 1 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px",marginRight:"10px", backgroundColor:"#f4f4f4"}} data-aos="zoom-in-right">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://tryolabs.com/images/blog/social/react.736da783.png) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>
               
               
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center", paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       {/*Project 2 */}
               <Card shadow={0} style={{width: '300px',borderRadius:"10px", backgroundColor:"#f4f4f4"}}data-aos="zoom-in-left">
               <CardTitle style={{color: '#333', height: '180px', background: 'url(https://tryolabs.com/images/blog/social/react.736da783.png) center / cover'}}></CardTitle>
               <h5 style={{textAlign:'center',color:"black" , opacity:"0.7"}}>Sofia Hotel</h5>
               <CardText style={{margin:"0",paddingBottom:"30px"}}>            
               </CardText>
               <CardActions border>
               <div style={{textAlign:"center",paddingTop:"13px"}}><a style={{textDecoration:"none"}} target="_blank" href="https://images.interactives.dk/files/bonnier-kom/pictures/maxresdefault_1.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&ixjsv=2.2.4&q=38&rect=0%2C22%2C3000%2C2076&w=280"
               >GitHub Link</a></div>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share" />
               </CardMenu>
               </Card>
       </div>

)};

export class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab:0
        };
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <JavaProjects/>
            )            
        }else if(this.state.activeTab===1){
            return(
                <WebProjects/>
            )            
        }else if(this.state.activeTab===2){
            return(
                <JavaScript/>
            )            
        }else if(this.state.activeTab===3){
            return(
                <ReactProjects/>
            )            
        }
    }
    render() {
        return (
            <div className="projects-body">
                <div className="category-tabs">
                    <Tabs className ="projects-navbar" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Java</Tab>
                        <Tab>HTML5/CSS3</Tab>
                        <Tab>JavaScript</Tab>
                        <Tab>React</Tab>
                    </Tabs>

                    
                    <Grid>
                            <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                            </Cell>
                    </Grid>
                
                </div>
            </div>
        )
    }
}

export default Projects
