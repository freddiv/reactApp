import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props){
         return  <div>
                <Link className="addIcon" to="/AddPhoto">&nbsp;</Link>    
                <div className='photoGrid'>
                    {props.posts
                     .sort((x,y) => {
                     return y.id - x.id;
                    })
                     .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
                 </div>
               </div>           
}

/*class PhotoWall extends Component {
    render(){
        
    return <div>
                <Link className="addIcon" onClick={this.props.onNavigate} to="/AddPhoto">+</Link>    

                <div className='photoGrid'>
                    {this.props.posts
                     .sort((x,y) => {
                     return y.id - x.id;
                    })
                     .map((post, index) => <Photo key={index} post={post} {...props} />)}
                </div>
            </div>
    }     
}*/

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;