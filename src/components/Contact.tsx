import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black'>
    <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-2xl font-medium text-blue-100">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-slate-400 border-zinc-700 rounded-md shadow-sm 
                         focus:ring-blue-500 focus:border-blue-500 text-white p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-2xl font-medium text-blue-100">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-slate-400 border-zinc-700 rounded-md shadow-sm 
                         focus:ring-blue-500 focus:border-blue-500 text-white p-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-2xl font-medium text-blue-100">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-slate-400 border-zinc-700 rounded-md shadow-sm 
                         focus:ring-blue-500 focus:border-blue-500 text-white p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       focus:ring-offset-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default Contact
