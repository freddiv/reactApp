import React, {Component} from 'react';
import PropTypes from 'prop-types';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Photo(props){
    const post = props.post;
     return  <figure className='figure'>
         <Link to={'/Single/' + post.id}><img className='photo' src={post.imageLink} /></Link>
                <figcaption>  <p>{post.description} </p>  </figcaption> 
                <div className='button-container'>
                    <button className='button' onClick={() => {
                     props.startRemovingPost(props.index, post.id) 
                     props.history.push('/');
                    }}> Remove </button>
                    <Link className='button' to={`/Single/${post.id}`}>
                     <div className='comment-count'>
                         <div className='speech-bubble'></div>
                         {props.comments[post.id] ? props.comments[post.id].length : 0}
                     </div>
                    </Link>
                 </div>
                </figure>
}
/*class Photo extends Component {
    render(){
        const post = this.props.post; 
        console.log(props.posts)
        //
    return  <figure className='figure'>
                <img className='photo' src={post.imageLink} />
                <figcaption>  <p>{post.description} </p>  </figcaption> 
                    <div className='button-container'>
                    <button className='button' onClick={() => {
                        this.props.onRemovePhoto(post) 
                        }}> Remove </button>
        </div>
            </figure>
    }     
}*/



Photo.propTypes = {
    post: PropTypes.object.isRequired
}

//maping store to nested object
/*
function mapStateToProps(state){
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Photo);
*/
export default Photo;