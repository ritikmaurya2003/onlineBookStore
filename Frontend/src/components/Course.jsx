import React from 'react'
import list from "../../public/list.json";
import Cards from "./Cards"
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" mt-28 items-center justify-center text-center"  >
            <h1 className="text-2xl font-semibold md:text-4xl">Unlock Premium Reads – Elevate Your Knowledge with <span className="text-pink-500"> Paid Books!</span></h1>
            <p className="text mt-4 font-medium text-lg  cursor-pointer ">Explore a carefully curated collection of paid books designed to broaden your knowledge and deepen your understanding. <br /> <span>
            From specialized topics to expert insights, these books offer a wealth of information at your fingertips.
                </span> </p>
                <hr className="w-1/2 border-2 border-pink-500 mx-auto mt-2" />
                
                <Link to="/">
                <button className="  mt-9 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
                    list.map((item)=> (
                        <Cards key={item.id} item={item}/>
                    ))
                    
            }
        </div>
    </div>
    </>
  )
}

export default Course
