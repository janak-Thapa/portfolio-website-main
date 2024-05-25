import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'>Hello there!  I'm Janak, a passionate self-taught front-end developer with a love for crafting immersive digital experiences.. I'm skilled in HTML5, CSS3, and JavaScript, and my area of expertise is developing dynamic, responsive websites. I am knowledgeable in well-known front-end frameworks like React.js and TailwindCss and I always try to learn more by investigating new developments and trends in the industry.</p>
        <br />
        <p className='text-xl'>Whether you have a project in mind, an exciting opportunity to discuss, or simply want to chat about front-end development, I'd love to hear from you! Feel free to reach out via email or connect with me on LinkedIn!</p>
      </div>
    </div>
  )
}

export default About