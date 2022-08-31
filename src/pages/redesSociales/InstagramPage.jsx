import instagramLogo from '../../assets/Instagram.png';
import React from 'react'

export const InstagramPage = () => {
  return (
    <div>
      <div>
        <a target="_blank">
          <img src={instagramLogo} className="w-40 rounded-md" />
        </a>
      </div>
    </div>
  )
}
