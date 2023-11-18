import { Link } from "react-router-dom";
import NavLinkList from "./nav-link-list";

const ITEMS = [
	{
		id: 21,
		title: "Hola",
		routes: [
			{
				id: 12,
				name: "Home",
				path: "/",
				exact: true,
				icon: "bx-coffee",
				routes: null,
			},
			{
				id: 22,
				name: "Students",
				path: "/students",
				exact: false,
				icon: "bx-user",
				routes: [
					{
						id: 23,
						name: "Register",
						path: "/students/register",
						exact: true,
					},
					{
						id: 24,
						name: "Reports",
						path: "/students/reports",
						exact: true,
					},
				],
			},
		],
	},
];

export default function Navbar({ isOpen }) {
	const className = isOpen ? " show-menu" : "";

	return (
		<div className={"nav" + className} id="navbar">
			<nav className="nav__container">
				<div className="">
					<Link to="/" className="nav__link nav__logo">
						<i className="bx bxs-disc nav__icon"></i>
						<span className="nav__logo-name">Monago</span>
					</Link>
					<div className="nav__list">
						{ITEMS.map((el) => (
							<div key={el.id} className="nav__items">
								<h3 className="nav__subtitle">{el.title}</h3>
								<NavLinkList routes={el.routes} />
							</div>
						))}
					</div>
				</div>

				<Link to="/" className="nav__link nav__logout">
					<i className="bx bx-log-out nav__icon"></i>
					<span className="nav__name">Log out</span>
				</Link>
			</nav>
		</div>
	);
}
