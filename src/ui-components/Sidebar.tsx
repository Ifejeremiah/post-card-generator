import styles from './Sidebar.module.sass';

function Sidebar() {
	return (
		<div className={styles['con-sidebar']}>
			<ul>
				<li className='d-flex align-items-center gap-2'>
					<i className='fa-solid fa-gear'></i>
					Jobs
				</li>
			</ul>
		</div>);
}

export default Sidebar;