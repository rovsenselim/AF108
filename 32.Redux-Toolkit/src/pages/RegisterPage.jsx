// // src/pages/RegisterPage.jsx
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const RegisterPage = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name && email && password) {
//             dispatch(login({ email }));
//             toast.success("Register successful!");
//             navigate("/home"); // Redirect to Home page
//         } else {
//             toast.error("Please fill in all fields!");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
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
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default RegisterPage;
