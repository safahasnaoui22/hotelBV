import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import'./notfound.css'
function Notfound() {
  return (
    <>
    <section className='notFound'>
        <div className="container" >
            <img src="./notFound.svg"/>
            <h1>LOOK LIKE YOU ARE LOST</h1>
            <p>we can not seem to find you the page you are looking for</p>
            <Link to={"/"}>
                Back to Home
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
            </Link>
        </div>
    </section>
    </>
  )
}

export default Notfound