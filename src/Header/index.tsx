import React from 'react'
import { Router, Link, Switch, Route } from 'react-router-dom'
import history from '../history'
import style from './style.module.css'
import Profile from '../Profile'

const urlImgUser1 = "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
const urlImgUser2 = "https://cs.pikabu.ru/post_img/big/2013/06/15/11/1371321270_1294283116.jpg";
const urlImgUser3 = "https://logmag.net/wp-content/uploads/2015/03/Anonimity.jpg";




const Main = () => {

	return (
		<div>
			<Router history={history}>
				<header className={style.header}>
					<div className={style.wrapper}>
						<nav className={style.nav}>
							<Link to='/profile1'>
								<p className={style.p}>User1</p>
							</Link>
							<Link to='/profile2'>
								<p className={style.p}>User2</p>
							</Link>
							<Link to='/profile3'>
								<p className={style.p}>User3</p>
							</Link>
						</nav>
					</div>
				</header>
				<Switch>
					<Route exact path="/profile1" component={() => <Profile name="User1" image={urlImgUser1} />} />
					<Route exact path="/profile2" component={() => <Profile name="User2" image={urlImgUser2} />} />
					<Route exact path="/profile3" component={() => <Profile name="User3" image={urlImgUser3} />} />
				</Switch>
			</Router>
		</div>
	)
}

export default React.memo(Main)