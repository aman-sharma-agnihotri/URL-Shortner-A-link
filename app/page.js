import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-200 mb-5 sm:mb-0">
      <section className="grid grid-col-1 sm:grid-cols-2 sm:h-[50vh]">
<div className=" flex flex-col gap-4 items-center justify-center">
  <p className="text-lg sm:text-2xl font-bold px-2">The best URL Shortner in the Web</p>
  <p className="px-5 sm:px-20">One of the most straight forward URL Shortner.<br /> No LogIn or SignUp required.<br /> Just type or paste and use it anywhere.</p>
  <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/shorten"><button className='bg-green-500 shadow-lg px-3 py-1 rounded-full text-white hover:cursor-pointer'>Try Now </button></Link>
          <Link href="https://github.com/aman-sharma-agnihotri" target='_blank'><button className='bg-green-500 shadow-lg px-3 py-1 rounded-full text-white cursor-pointer'>GitHub</button></Link>
        </div>
</div>
<div className=" flex justify-start relative">
<Image src={"/vector.jpg"} alt="an image of a vector" fill={true} className="hidden sm:block mix-blend-lighten">
</Image>
</div>
      </section>
    </main>
  );
}
