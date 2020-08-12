import React,{ Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div id={this.props.id}>

                <h3>Username: {this.props.username}</h3>
                <h3>Curtidas: {this.props.curtidas>1? this.props.curtidas+ ' Curtidas': this.props.
                curtidas+' curtidas'}</h3>
                <h3>Comentarios: {this.props.comentarios>1?this.props.comentarios+ ' comentarios':
                this.props.comentarios+ ''}
                </h3>
                <br/><br/>
            </div>
        );
    }

}
export default Feed;
