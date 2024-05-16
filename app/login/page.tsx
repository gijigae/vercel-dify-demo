'use client'

import React from 'react'
import { login, signup } from './actions'

export default function LoginPage() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, action: (formData: FormData) => Promise<void>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await action(formData)
  }

  const handleSignup = async () => {
    const form = document.querySelector('form')
    if (form) {
      const formData = new FormData(form)
      await signup(formData)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={e => handleSubmit(e, login)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input id="email" name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input id="password" name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
        </div>
        <div className="mt-4 text-center">
          <button type="button" onClick={handleSignup} className="text-indigo-600 hover:underline">Sign up</button>
        </div>
      </form>
    </div>
  )
}
