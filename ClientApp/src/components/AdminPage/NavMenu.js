import React from "react";
import { Link } from "react-router-dom";
import { Menu, Sidebar } from "semantic-ui-react";

export const NavMenu = () => {
	return (
		<Menu inverted vertical>
			<Menu.Item name="Home">
				<Link to="/admin">Home</Link>
			</Menu.Item>

			<Menu.Item>
				Producten
				<Menu.Menu>
					{/* TODO: Zoek functie wel of niet implementeren */}
					{/* <Menu.Item name="searchProduct">
						<Link to="/admin-searchProduct">Zoeken</Link>
					</Menu.Item> */}
					<Menu.Item name="addProduct">
						<Link to="/admin-addProduct">Toevoegen</Link>
					</Menu.Item>
					<Menu.Item name="allProducts">
						<Link to="/admin-allProducts">Alle producten</Link>
					</Menu.Item>
				</Menu.Menu>
			</Menu.Item>

			<Menu.Item>
				Gebruikers
				<Menu.Menu>
					{/* <Menu.Item name="addUser">
						<Link to="/admin-addUser">Toevoegen</Link>
					</Menu.Item> */}
					<Menu.Item name="allUsers">
						<Link to="/admin-allUsers">Alle gebruikers</Link>
					</Menu.Item>
				</Menu.Menu>
			</Menu.Item>
			<Menu.Item>
                Kortingscodes
                <Menu.Menu>
                    <Menu.Item name='addDiscount'>
                        <Link to="/admin-addDiscount">Toevoegen</Link>
                    </Menu.Item>
                    <Menu.Item name='AllDiscount'>
                        <Link to="/admin-allDiscounts">Alle kortingscodes</Link>
                    </Menu.Item>

                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                Statistieken
                <Menu.Menu>
                    <Menu.Item name='turnover'>
                        <Link to="/admin-turnover">Omzet</Link>
                    </Menu.Item>
                    <Menu.Item name='popularbeers'>
                        <Link to="/admin-popularbeers">Populaire biertjes</Link>
                    </Menu.Item>
                    <Menu.Item name='populardiscounts'>
                        <Link to="/admin-populardiscounts">Populaire kortingscodes</Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>

			{/* <Menu.Item name="accountSettings">
				<Link to="/admin-accountSettings">Account settings</Link>
			</Menu.Item> */}
		</Menu>
	);
};
