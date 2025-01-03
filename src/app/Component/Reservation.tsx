// import React from 'react'

// export const Reservation = () => {
//   return (
//     <section className='bg-gradient-to-r from-black to bg-slate-900 py-10'>
// <div className='container mx-auto text-center'>
//   <h2 className='text-3xl font-extrabold mb-6 text-white'>Make a Reservation</h2>
// <form className='max-w-md mx-auto'>
// <div className='mb-4 text-white'>
// <input type="text"
// placeholder='Your Name'
// className='w-full p-3 border border-grey-300 rounded-md'
// required />



// </div>

// <div className='mb-4'>
// <input type="email"
// placeholder='Your Email'
// className='w-full p-3 border border-grey-300 rounded-md'
// required />
// </div>

// <div className='mb-4'>
//   <input type="date"
//   className='w-full p-3 border border-gray-300 rounded-md'
// />
// </div>
// <div className='mb-4'>
//   <input type="time"
//   className='w-full p-3 border border-gray-300 rounded-md'
//   required/>
// </div>

// <div className='mb-4'>
//   <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
//     Reserved Table
//   </button>
// </div>


// </form>


// </div>































//     import React from 'react'

export const Reservation = () => {
  return (
    <section className='bg-gradient-to-r from-black to-slate-900 py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-8 text-white'>Make a Reservation</h2>
        
        <form className='max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl'>
          
          {/* Name Input */}
          <div className='mb-6'>
            <input 
              type="text"
              placeholder='Your Name'
              className='w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>

          {/* Email Input */}
          <div className='mb-6'>
            <input 
              type="email"
              placeholder='Your Email'
              className='w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>

          {/* Date Input */}
          <div className='mb-6'>
            <input 
              type="date"
              className='w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>

          {/* Time Input */}
          <div className='mb-6'>
            <input 
              type="time"
              className='w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>

          {/* Submit Button */}
          <div className='mb-4'>
            <button className='bg-blue-600 text-white py-3 px-6 w-full rounded-md text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'>
              Reserve Table
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
