import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-200">
      <section className="grid grid-cols-2 h-[50vh]">
<div className=" flex flex-col gap-4 items-center justify-center">
  <p className="text-2xl font-bold ">The best URL Shortner in the Web</p>
  <p className="px-20">One of the most straight forward URL Shortner. No LogIn or SignUp required. Just type or paste and use it anywhere.</p>
  <div className='flex gap-4'>
          <Link href="/shorten"><button className='bg-green-500 shadow-lg px-3 py-1 rounded-full text-white hover:cursor-pointer'>Try Now </button></Link>
          <Link href="https://github.com/aman-sharma-agnihotri" target='_blank'><button className='bg-green-500 shadow-lg px-3 py-1 rounded-full text-white cursor-pointer'>GitHub</button></Link>
        </div>
</div>
<div className=" flex justify-start relative">
<Image src={"/vector.jpg"} alt="an image of a vector" fill={true} className="mix-blend-lighten">
</Image>
</div>
      </section>
    </main>
  );
}
