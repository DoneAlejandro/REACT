import React from 'react'

const hello = (props) => {
	return (
		<div className='box'>
			<h1 className='title'>
				Привет! {props.hello}
			</h1>
		</div>
	)
}

export default hello