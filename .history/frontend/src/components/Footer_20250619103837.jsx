import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div>
        {/*...Left section...*/}
        <div>
<img src={assets.logo} alt="" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/*...center section...*/}
        <div>
            <p>COMPANY</p>
            <ul></ul>
        </div>
        {/*..Right section...*/}
        <div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
