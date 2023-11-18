import { Link } from "react-router-dom";
import profile from "./assets/images/profile.PNG";

export default function Header({ handleNavbar, isOpen }) {
	const className = isOpen ? "bx bx-x" : "bx bx-menu";
	return (
		<div className="header">
			<div className="header__container">
				<img src={profile} alt="profile" className="header__img" />
				<Link to="/" className="header__logo">
					Mission
				</Link>
				<div className="header__search">
					<input type="search" placeholder="Search" className="header__input" />
					<i className="header__icon bx bx-search"></i>
				</div>
				<div
					className="header__toggle"
					onClick={() => handleNavbar((current) => !current)}
				>
					<i id="header-toggle" className={className}></i>
				</div>
			</div>
		</div>
	);
}
