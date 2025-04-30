// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();

//         // Əslində burada backend yoxlanışı olmalıdır
//         if (email && password) {
//             dispatch(login({ email }));
//             toast.success("Login uğurludur!");
//             navigate("/home"); // İstifadəçini Home səhifəsinə yönləndir
//         } else {
//             toast.error("Email və şifrə tələb olunur");
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Şifrə"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;