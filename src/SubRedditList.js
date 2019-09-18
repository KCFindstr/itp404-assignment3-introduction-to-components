import React from 'react';
import SubReddit from './SubReddit';

export default function(props) {
	return props.data.length ? (
		<div>
			<h1 className="subtitle">SubReddit Subscribers: {props.data[0].data.subreddit_subscribers}</h1>
			{props.data.map((reddit, index) => {
				return <SubReddit
					title={reddit.data.title}
					url={reddit.data.url}
					ups={reddit.data.ups}
					author={reddit.data.author}
					numComments={reddit.data.num_comments}
					key={reddit.data.id}
					onClick={props.onClick}/>
			})}
		</div>
	) : <div>No data.</div>;
}