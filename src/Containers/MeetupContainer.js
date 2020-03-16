import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import MeetupDetail from '../Components/MeetupDetail'
import './css/meetup-container.css'
import {Container, Button, Divider, Segment } from 'semantic-ui-react'


const MeetupContainer = (props) => {

    return (
        <div className="meetup-container">
            <Container>
                <Segment basic textAlign='center'>

                    Featured Events will go here under a filtered meetup list 
                    <Switch>
                        <Route 
                            path="/meetups/:meetupId"
                            render={(props) => <MeetupDetail routerProps={props}/>}
                        />
                        <Route exact path='/meetups'component={Calendar}/>  
                    </Switch>
                
                    Events here will show upcoming week by default. Add Buttons that allow you to see events by clicked date 
                    <br></br>
                    All meetups will go here under a meetups/all route 
                    <br></br><br></br>
                    <MeetupList />

                <Divider horizontal>Or</Divider>
                    <Switch>
                        <Route path="/meetups/new" render={() => 
                            <div>
                                <Calendar />
                                <MeetupForm />
                            </div>
                        }/>
                    </Switch>
                    {props.profile? <Route exact path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : "Create an account to make an event!"}
                    {/* Add below for testing. Don't want to have to keep logging in while creating the form */}
                    {/* <Link to='/meetups/new'>Create a new event!</Link>  */}
                </Segment>

            </Container>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(MeetupContainer);