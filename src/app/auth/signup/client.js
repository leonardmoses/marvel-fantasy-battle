'use client'

import { useState } from 'react'
import { signup } from '../actions'

export default function SignupClientForm({ setModalSignupIsOpen, setModalLoginIsOpen }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null) // To store errors
    const [successMessage, setSuccessMessage] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault()
        setError(null) // Reset errors
        setSuccessMessage(null); // Reset success message


        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        try {
            const response = await signup(formData)

            if (!response || response?.error) {
                setError(response?.error || 'Something went wrong. Please try again.');
                setSuccessMessage(null);
                return;
            } else {
                // If no error, show success message
                setSuccessMessage('Signup successful! Redirecting...');

                // Wait 3 seconds before hiding the success message and closing the modal
                setTimeout(() => {
                    setModalSignupIsOpen(false);
                    setEmail('');
                    setPassword('');

                    window.location.href = '/'; // Forces a page reload and redirects to '/'
                }, 3000);
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setSuccessMessage(null);
        }
    }
    console.log(error)
    return (
        <form onSubmit={handleSubmit} className="p-3 space-y-4 rounded-md bg-ThemeWhite">
            {successMessage && (
                <p className="text-green-600 text-center">{successMessage}</p>
            )}
            {error && <p className="text-red-600 text-center">{error}</p>}

            <div
                className="bg-white w-fit ml-auto px-2 rounded-md cursor-pointer hover:bg-ThemeA1"
                onClick={() => setModalSignupIsOpen(false)}
            >
                <h1>X</h1>
            </div>

            <div className='text-center'>
                <h1 className='text-4xl text-MarvelBlack'>Signup</h1>
            </div>
            <div className='text-black'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <div className="flex">
                <div className='flex items-center'>
                    <p
                        className='text-lg cursor-pointer'
                        onClick={() => { setModalSignupIsOpen(false); setModalLoginIsOpen(true); }}
                    >
                        Login
                    </p>
                </div>

                <button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-ThemeA1 text-white rounded-md hover:bg-ThemeA2 border border-MarvelBlack/20"
                >
                    Sign Up
                </button>
            </div>
        </form>
    )
}
