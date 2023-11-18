import { NavLink as Link } from "react-router-dom";

export default function NavLink({ name, path, icon, exact }) {
	return (
		<Link
			to={path}
			exact={exact}
			className="nav__link"
			activeClassName="active"
		>
			{icon && <i className={"nav__icon bx " + icon}></i>}
			<span className="nav__name">{name}</span>
		</Link>
	);
}
