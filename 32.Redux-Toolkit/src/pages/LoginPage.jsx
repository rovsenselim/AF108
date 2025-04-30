// // src/pages/LoginPage.jsx
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const LoginPage = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email && password) {
//             dispatch(login({ email }));
//             toast.success("Login successful!");
//             navigate("/home"); // Redirect to Home page
//         } else {
//             toast.error("Please enter all fields!");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;
