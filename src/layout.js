import { useState } from "react";
import Header from "./header";
import Navbar from "./nabvar";

function Layout({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Header handleNavbar={setIsOpen} isOpen={isOpen} />
			<Navbar isOpen={isOpen} />
			<main className="">{children}</main>
		</>
	);
}

export default Layout;
