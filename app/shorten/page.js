"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shortner = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")
    
    const handleCopy = () => {
      const text = document.getElementById("copytext").innerText;
      navigator.clipboard.writeText(text);
      alert("Text copied successfully to clipboard!")
    };

const generate=()=>{
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};



fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("")
    setShorturl("")
    
     console.log(result)
    alert(result.message)
    }
    )
  .catch((error) => console.error(error));
}
    
  return (
    <div className='mx-auto max-w-lg bg-green-100 my-8 p-8 rounded-lg flex flex-col gap-5'>
        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-4'>
            <input value={url} className='p-1 rounded-lg focus:outline-green-600' type="text" placeholder='Enter URL name...' onChange={e=>{setUrl(e.target.value)}} />
            <input value={shorturl} className='p-1 rounded-lg focus:outline-green-600' type="text" placeholder='Enter preferred short URL name...' onChange={e=>{setShorturl(e.target.value)}} />
            <button onClick={generate} className='bg-green-500 shadow-lg px-3 py-1 rounded-full text-white my-3 cursor-pointer hover:bg-green-400'>Generate</button>
        </div>
{
  generated && <><span className='font-bold text-lg'>Your Link</span><code id='copytext' className='hover:bg-yellow-300 px-3 py-1 rounded-full overflow-scroll'><Link target="_blank" href={generated}>{generated}</Link></code></>
}
<button
        onClick={handleCopy}
        className="bg-green-500 shadow-lg px-3 py-1 rounded-full text-white my-3 cursor-pointer hover:bg-green-400"
      >
        Copy
      </button>
    </div>
  )
}

export default Shortner