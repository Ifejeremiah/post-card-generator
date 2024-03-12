import styles from './NavbarItems.module.sass';
import NavbarItemModel from 'types/NavbarItemModel';

function NavbarItems({ icon, tag }: NavbarItemModel) {
	return (
		<li className={`${styles['list']} d-flex align-items-center gap-2 mb-3`}>
			<i className={icon}></i>
			{tag}
		</li>
	);
}

export default NavbarItems;