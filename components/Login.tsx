'use client'

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const session = useSession();
    if (session.data?.user) {
        router.push('/admin');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = formData.get('id') as string;
        const password = formData.get('password') as string;

        signIn('credentials', { id, password });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="max-w-md w-full bg-gray-800 p-8 border border-gray-700 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="id">Email</label>
                        <input
                            id="id"
                            name="id"
                            type="id"
                            required
                            className="block w-full border border-gray-600 bg-gray-900 text-white rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            className="block w-full border border-gray-600 bg-gray-900 text-white rounded-md p-2 pr-10"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center px-3"
                        >
                            {showPassword ? (
                                <FaEyeSlash className="text-gray-400" />
                            ) : (
                                <FaEye className="text-gray-400" />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#97C584] text-black font-extrabold py-2 rounded-md hover:bg-transparent hover:text-[#97C584] border-2 border-[#97C584] transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
