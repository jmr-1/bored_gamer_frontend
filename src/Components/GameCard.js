import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addToCollection} from '../redux/actions.js';


const GameCard = (props) => {

    let {id, name, designers, image_url, favorite, owned} = props.game

    //need to come back to this later and fix the dual-use nature of displaying in game page and displaying in profile page
    // will likely need to assign two sets of game info props and just make two sets of logic 

    return (
        
        <div className="content">
            <h2>
                <em>
                    {name} {designers? ` - Designed by: ${designers}` : null  }
                    {/* <img src={image_url}></img>  */}
                    {/* Uncomment above to show images once I've made smaller, standardized card containers for them. Some images are gigantic */}
                </em>

                {props.profile? 
                    <div>
                        {owned? "Game owned" : null}
                        {favorite? "Favorite game" : null}
                        <br></br>
                        <button onClick={() => props.favoriteGame(props.game, props.profile)}>Favorite this game!</button>
                        <button onClick={()=> props.ownGame(props.game, props.profile)}>I own this game!</button>
                    </div>
                    :null
                }
                <Link className="item" to={`/games/${id}`}><button className="ui small button">See details</button></Link>
            </h2>
        </div>
        
    )
}

const mapStateToProps = (state) => {

    return {
        profile: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        favoriteGame: (game, profile) => { dispatch(addToCollection(game, profile, "favorite"))},
        ownGame: (game, profile) => {dispatch(addToCollection(game, profile, "owned"))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameCard)