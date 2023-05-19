import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = {
	username: "",
	password: "",
};

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [form, setForm] = useState(initialState);
	const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
	const [user, setUser] = useState(isAuth ? localStorage.getItem("user") : "");

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.username.trim() || !form.password.trim()) {
			alert("Completa correctamente los datos");
			return;
		}

		setUser(form.username);
		setForm(initialState);
		setIsAuth(true);

		localStorage.setItem("user", form.username);

		navigate(`/usuario/${form.username}`);
	};

	const handleLogout = () => {
		localStorage.removeItem("user");
		navigate("/login");
		setIsAuth(false);
		setUser("");
	};

	const data = {
		isAuth,
		user,
		form,
		handleChange,
		handleLogout,
		handleSubmit,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
