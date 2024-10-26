import Image from "next/image";


export default function Home() {
  return <>


    <div className="pt-36">
      <div className="flex gap-2 items-center justify-center py-4">
        <h1 className="text-8xl font-bold text-white">BoostBank</h1>
        <img className="w-[90px]" src="./rocket-158_128.gif" alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center">
        <p className="text-white text-lg py-4 justify-center"> A Crowdfunding platform for creators.  Start Now !!</p>
        <div className="flex gap-6 items-center">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 mt-24 h-1"></div>
    <div className=" bg-slate-950 text-white min-h-96 ">
      <div className="text-center py-8"> <h2 className="text-3xl font-bold">Your Fans can Contribute You</h2></div>
      <div className=" flex  py-4 items-center justify-around  ">
        <div className="text-center font-semibold text-lg"> <img className="py-4  " src="./moneybag.gif"></img> Fans Help </div>
        <div className="text-center font-semibold text-lg"> <img className="py-4  " src="./cash.gif"></img> Fans Contribute </div>
        <div className="text-center font-semibold text-lg"> <img className="py-4  " src="./bank.gif"></img> Fans Collaborate </div>

      </div>
    </div>
    <div className="bg-gray-900 mt-24 h-1"></div>
    <div className=" bg-slate-950 text-white min-h-[50vh] pb-28 ">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold">Learn About Us</h2>
      </div>
      <div className="flex items-center py-6 justify-center">
        <iframe
          width="700"
          height="393"
          src="https://www.youtube.com/embed/CiFoHm7HD94?si=JlMDA8wVjCUpbsYs"
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>



  </>

}
