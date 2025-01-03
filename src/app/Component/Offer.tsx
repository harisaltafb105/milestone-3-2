// "use client"
// import React from 'react'

// type TOffer= {
//   title:string;
//   description:string;
//   }

//   const SpecialOffers: React.FC = () =>{
  
//   const offers: TOffer[] = [
//   {
//     title: 'Happy Hour',
//     description: "5 PM se 7 PM tk tamam drinks par 50% hasil kren"

//   },
//   {
//     title: 'Family Meal Deal',
//     description: '2 main courses order kren aur family deal coupon hasil kren'
//   },
//   {
//     title: 'Weekly Brunch',
//     description: 'Ek free complimentary drink paen..'
//   },
//   ];


// const handleofferclick=(description:string) =>{
//   alert (description);
// } 

// return (
//     <section className='py-10'>
//       <div className='container mx-auto text-center'>
//     <h2 className='text-4xl font-bold mb-6 text-white'> Special Offer</h2>
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6'>

//   {offers.map ((offer,index )=>(
//      <button key={index}
//     onClick={()=>handleofferclick(offer.description)}
//     className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300">
//      <h3 className='text-2xl font-semibold text-slate-700'> {offer.title}</h3>
//      <p className='text-red-700 mt-3'>{offer.description}</p>
//      </button>
  
//   ))}
//     </div>


//     </div>
    
//     </section>
//   )
//   }
// export default SpecialOffers;
"use client"
import React from 'react'

type TOffer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {

  const offers: TOffer[] = [
    {
      title: 'Happy Hour',
      description: "5 PM se 7 PM tk tamam drinks par 50% hasil kren"
    },
    {
      title: 'Family Meal Deal',
      description: '2 main courses order kren aur family deal coupon hasil kren'
    },
    {
      title: 'Weekly Brunch',
      description: 'Ek free complimentary drink paen..'
    },
  ];

  const handleofferclick = (description: string) => {
    alert(description);
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleofferclick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300">
              <h3 className='text-2xl font-semibold text-slate-700'> {offer.title}</h3>
              <p className='text-red-700 mt-3'>{offer.description}</p>
            </button>

          ))}
        </div>

      </div>

    </section>
  )
}

export default SpecialOffers;
