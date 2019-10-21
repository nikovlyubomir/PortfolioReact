import React, { Component } from 'react'
import {Grid, Cell,ListItemContent,ListItem,List} from 'react-mdl';

export class Contact extends Component {
    render() {
        return (
            
        <div className="contact-body">
            <Grid className="contact-grid" >
                <Cell col={6}>
                    <h2>Lyubomir Nikov</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height:'250px'}}
                    />
                <p style={{width:"75%", margin:"auto" , paddingTop:"1em" , fontSize:"1.3rem"}}>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Maxime at voluptatum nihil harum consectetur perferendis!</p>
                </Cell>

                <Cell col={6}>
                    <h2>Contact me</h2>
                    <hr/>

                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px",fontFamily:"Anton"}} data-aos="zoom-in-left" data-aos-duration="1000">
                                    <i className='fa fa-phone-square icon1' aria-hidden="true"/>
                                      +45 52521814
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px",fontFamily:"Anton"}} data-aos="zoom-in-left" data-aos-duration="2000">
                                    <i className='fa fa-envelope' aria-hidden="true"/>
                                      nikovlyubomir<span data-aos="zoom-in-down" data-aos-duration="1000">@gmail.com</span>
                                </ListItemContent>
                            </ListItem>
                         
                            <ListItem>
                                <ListItemContent classname="content" style={{fontSize:"30px",fontFamily:"Anton"}}data-aos="zoom-in-left" data-aos-duration="3000">
                                    <i className='fa fa-skype icon3' aria-hidden="true"/>
                                     nikovlyubomir                                    
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                 

                </Cell>
            </Grid>
        </div>
           
        )
    }
}

export default Contact
