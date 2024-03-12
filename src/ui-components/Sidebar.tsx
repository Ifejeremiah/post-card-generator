import styles from './Sidebar.module.sass';
import NavbarItems from './NavbarItems';
import NavbarItemModel from 'types/NavbarItemModel';

const items: NavbarItemModel[] = [
	{
		icon: 'fa-solid fa-gear',
		tag: 'jobs',
	},
	{
		icon: 'fa-solid fa-user',
		tag: 'users',
	},
	{
		icon: 'fa-solid fa-receipt',
		tag: 'accounts',
	}];

function Sidebar() {
	return (
		<div className={styles['con-sidebar']}>
			<ul>
				{items.map((x, y) => <NavbarItems icon={x.icon} tag={x.tag} key={y} />)}
			</ul>
		</div>);
}

export default Sidebar;