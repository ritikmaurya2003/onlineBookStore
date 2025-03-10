import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className="mt-4 my-3 p-6 ">
    <div className=" cursor-pointer card bg-base-100 w-92 shadow-xl hover:scale-105 transition-transform duration-300">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
