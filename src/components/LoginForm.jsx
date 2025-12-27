import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await axios.post('https://mernmyprojectbackend.onrender.com/auth/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                setMessage("Successful!!");
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('role', response.data.role);
                navigate('/')
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage("Login Failed");
        }
    }

    return (
        <div className="w-[300px] mx-auto p-5 border-2 flex flex-col gap-4 bg-gray-200 rounded-md mt-10 ">
            <h1 className="text-3xl text-center mb-4 hover:text-stone-50 hover:scale-105 transition">Login</h1>
            <input type="text"
                placeholder="Enter Username"
                className="p-2 border-2 rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input type="password"
                placeholder="Enter Password"
                className="p-2 border-2 rounded-md"
                value={password}
                onChange={(e) => setPass(e.target.value)} />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-[100px] hover:bg-orange-500 hover:scale-105 transistion" onClick={handleSubmit}>Submit</button>
            {message && (
                <p className={`text-center font-bold ${message === "Successful!!" ? "text-green-600" : "text-red-600"}`}>
                    {message}
                </p>
            )}
        </div>
    )
}

export default LoginForm
