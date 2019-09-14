import React from 'react';

function Number(props) {
	return <span>{ props.value.toLocaleString() }</span>
}

export default Number;
