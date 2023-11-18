import { NavLink as Link } from "react-router-dom";
import NavLinkList from "./nav-link-list";

export default function NavDropdown({ name, path, routes, icon, exact }) {
	return (
		<div className="nav__dropdown">
			<Link to={path} exact={exact} className="nav__link">
				<i className={"nav__icon bx " + icon}></i>
				<span className="nav__name">{name}</span>
				<i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
			</Link>
			{/*  */}
			<div className="nav__dropdown-collapse">
				<div className="nav__dropdown-content">
					<NavLinkList routes={routes} />
				</div>
			</div>
		</div>
	);
}
