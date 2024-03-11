import styles from './Navbar.module.sass';

function Navbar() {
	return (<div className={`${styles['con-navbar']} d-flex justify-content-center`}>
		<div className={`${styles['navbar']} d-flex align-items-center justify-content-between`}>
			<div className={styles['logo']}>
				<h1>Post Card Generator</h1>
			</div>
			<div className={`${styles['user-info']} d-flex align-items-center justify-content-between gap-4`}>
				<div className={`${styles['avatar']} d-flex align-items-center justify-content-center`}>
					<p>JO</p>
				</div>
				<div className={`${styles['logout-icon']} d-flex align-items-center justify-content-center`}>
					<i className="fa-solid fa-sort-down"></i>
				</div>
			</div>
		</div>
	</div>);
}

export default Navbar;