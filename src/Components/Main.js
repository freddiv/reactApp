import React, {Component} from 'react';
import Title from './Title';
import Single from './Single';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions';

class Main extends Component {
    constructor(){
       super()
    }
    
    state = {loading: true};
    componentDidMount(){
     this.props.startLoadingPosts().then(() => {
       this.setState({loading: false});
     });
     this.props.startLoadingComments();  
    }
    
    render(){
    return (
        <div>
        <h1>
            <Link to='/'>PhotoWall</Link>
        </h1>
             <Route exact path="/" render={() => (
               <div>
                   <PhotoWall {...this.props} /> 
                </div>  
             )}/>
                
            <Route path = "/AddPhoto" render={({history}) => (
                  <AddPhoto {...this.props}/>                               
            )} /> 
          
            <Route path="/Single/:id" render={(params) => (
                <Single loding={this.state.loading} {...this.props} {...params} />
            )} /> 
            </div>
        )
    }
}


export default Main;