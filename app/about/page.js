import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5 p-5'>
        <h1 className='font-bold text-4xl'>About A-link</h1>
        <h3 className='text-xl'>A-link is a fast, simple, and reliable URL shortener that helps you transform long, messy links into clean, shareable ones. Whether you’re sharing on social media, sending emails, or managing campaigns, Alink makes your links more manageable and professional.</h3>
        
        <h2  className='font-semibold text-xl'> Why A-link?</h2>
        <ol>
            <li> 🚀Lightning-fast — Shorten links instantly with a single click.</li>
            <li>🔗 Easy to use — Just paste your long URL and choose a short one in seconds.</li>
            <li>🎨 Clean, minimal interface built with modern technologies like Next.js for speed and scalability.
            </li>
        </ol>
        <p className='font-thin underline decoration-yellow-300 '>
At Alink, our mission is to make sharing links effortless and elegant.
Try it now and simplify your links with style!
        </p>
    </div>
  )
}

export default page