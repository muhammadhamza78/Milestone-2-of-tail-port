import React from 'react'

const About = () => {
  return (
    <div className='bg-blue-400'>
    <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-black mb-8">About Me</h1>
          <div className="prose prose-invert lg:prose-xl">
            <p className="text-white mb-6 text-3xl">
              Hi! I am genuinely excited about the opportunity to contribute to your team. I see myself being here for the long term, especially if I continue to feel challenged and have opportunities to grow within the role. My goal is to not only contribute to the success of the team and the company but also develop my skills and career over time. I am looking for a position where I can grow, take on increasing responsibilities, and make a lasting impact. I would love to see where my journey with your team can go, and I'm excited about the potential to contribute for years to come.
            </p>
            <h1 className="text-5xl font-semibold text-black mb-4">Skills</h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-black text-3xl">Frontend</h3>
                <ul className="list-disc list-inside text-gray-600 text-2xl">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black text-3xl">Backend</h3>
                <ul className="list-disc list-inside text-gray-600 text-2xl">
                  <li>Node.js</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About
