import React from 'react';
import Number from './Number';

function Comment(props) {
	return <div>{ props.number > 0 ?
		<span><b>Comments:</b> <Number value={props.number}/></span> :
		<b>No comments</b> }
	</div>
}

export default Comment;
