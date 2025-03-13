import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='w-full z-10 bg-red-50 h-[380px] '>
        <img className='w-full h-full object-cover' src="./RealPenalty.jpg" alt="Penalty Image" />
        <img
          src="./profile.jpg"
          className=' w-28 border-black rounded-full absolute bottom-44 left-1/2 transform -translate-x-1/2 mb-2'
          alt="Profile"
        />
      </div>
      <div className='my-10 flex flex-col justify-center text-center text-slate-400'>
        <div className=''>@{params.username}</div>
        <div className=''>Exclusive Racing Thrills and Speed Content</div>
        <div className=''>83k Subscriber . 265 post . 1500$/month </div>

      </div>
      <div className='flex gap-16 justify-between w-full px-8  mt-24 h-[84vh]'>
        <div className="leaderboard w-[48%]  bg-slate-900 rounded-xl my-4 py-4">
          <h3 className='text-center my-2 font-bold text-xl'>Supporters</h3>
          <ul className='text-sm  my-8 text-center'>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li><li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li><li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
            <li className='my-2'><img src="" alt="" />
              <h4 >{params.username} donated <span className='font-bold'>15$</span> to creater club with message "❤️"</h4>
            </li>
          </ul>
        </div>
        <div className=" bg-slate-900 w-[48%] payment  my-4 py-4 rounded-xl ">
          <h3 className='text-center my-2 font-bold text-xl'>Make a payment</h3>

          <form className=" px-8 my-4  ">
            <div className="my-2">

              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4" placeholder="Enter Name" required />
            </div>
            <div className="my-2">

              <input type="text" id="email" className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Message" required />
            </div>
            <div className="my-2">

              <input type="email" id="email" className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Amount" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Now</button>
          </form>

        </div>
      </div>


    </>
  )
}

export default Username
