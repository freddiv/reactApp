import React, { Component } from 'react';


/*function Title(props){
      return (<h1>{props.title} </h1>)    
}*/
              
class Comments extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        const id = this.props.id;
        console.log(comment, id);

        if (comment && comment.length > 3) {
            this.props.startAddingComment(comment, id);
            event.target.elements.comment.value = '';
            //this.props.history.push('/');
        }
    }
    render() {
        console.log(this.props.comments);
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index) => {
                        return (
                            <p key={index} > {comment} </p>
                            )
                    }
                  )
                }
                <form onSubmit={this.handleSubmit} className="comment-form">
                    <input type="text" placeholder="Comment" name="comment" />
                    <input type="submit" hidden />
                </form>
              </div>
            )    
    }    
}

            
export default Comments;