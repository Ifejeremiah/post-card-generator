import Sidebar from 'ui-components/Sidebar';
import styles from './Layout.module.sass';
import Navbar from 'ui-components/Navbar';
import PropsModel from 'types/PropsModel';

function Layout({ children }: PropsModel) {
	return (<div className={styles['con-section']}>
		<div className={`${styles['section-a']} d-flex align-items-center justify-content-center`}>
			<Sidebar />
		</div>
		<div className={`${styles['section-b']}`}>
			<Navbar />
			{children}
		</div>
	</div>);
}

export default Layout;