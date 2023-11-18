import NavDropdown from "./nav-dropdown";
import NavLink from "./nav-link";

export default function NavLinkList({ routes }) {
	return routes.map((item) =>
		item.routes ? (
			<NavDropdown key={item.id} {...item} />
		) : (
			<NavLink key={item.id} {...item} />
		)
	);
}
