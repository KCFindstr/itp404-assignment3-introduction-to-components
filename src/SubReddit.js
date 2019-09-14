import React from 'react';
import Number from './Number';
import Comment from './Comment';

function SubReddit(props) {
	return <div className="subreddit">
		<div>
			<b>Title:</b> <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
		</div>
		<div><b>Author:</b> {props.author}</div>
		<div><b>Ups:</b> <Number value={props.ups}/></div>
		<Comment number={props.numComments}/>
	</div>;
}

export default SubReddit;
