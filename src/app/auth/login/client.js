'use client'

import { useState } from 'react'
import { login } from '../actions'

export default function LoginClientForm({ setModalLoginIsOpen, setModalSignupIsOpen }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        // Call the login function from actions.js
        await login(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="p-3 space-y-4 rounded-md bg-ThemeWhite">
            <div
                className="bg-white w-fit ml-auto px-2 rounded-md cursor-pointer hover:bg-ThemeA1"
                onClick={() => setModalLoginIsOpen(false)}
            >
                <h1>X</h1>
            </div>

            <div className='text-center'>
                <h1 className='text-4xl text-MarvelBlack'>Login</h1>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-MarvelBlack">
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
                        onClick={() => { setModalLoginIsOpen(false); setModalSignupIsOpen(true) }}
                    >
                        Signup
                    </p>
                </div>

                <button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-ThemeA1 text-white rounded-md hover:bg-ThemeA2 border border-MarvelBlack/20"
                >
                    Login
                </button>
            </div>
        </form>
    )
}
