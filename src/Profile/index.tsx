import React, { memo } from 'react'
import style from './style.module.css'

interface Props {
	name: string,
	image: string
}

const Profile = (props: Props) => {
	return (
		<React.Fragment>
			<div className={style.wrapper}>
				<img src={props.image} alt="" className={style.img} />
			</div>
			<p className={style.p}>{props.name}</p>

		</React.Fragment>
	)
}

export default memo(Profile)