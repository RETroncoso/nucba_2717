import React from "react";
import {
	BrowserRouter,
	Route,
	Routes as ReactDomRoutes,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import { Login } from "../pages/Login/Login";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<ReactDomRoutes>
					<Route path="/" element={<Home />} />

					<Route path="products">
						<Route index element={<Products />} />
						<Route path=":product" element={<Product />} />
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="*" element={<p>Error</p>} />
				</ReactDomRoutes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
