import React from 'react'

const Banner = () => {
  return (
    <div>
        {/*.....Left side .....*/}
        <div>
<div>
    <p>Book Appointment</p>
    <p>With 100+ Trusted Doctors</p>
</div>
<button>Create account</button>
        </div>
         {/*.....Right side .....*/}
        <div>
            <img src={assets.appointment} alt="" />
        </div>
      
    </div>
  )
}

export default Banner
