import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../../Assets/person1.jpg'
import user1 from '../../../../Assets/person2.jpg'
import user2 from '../../../../Assets/person3.jpg'
import user3 from '../../../../Assets/person1.jpg'
import user4 from '../../../../Assets/person2.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">person1 </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">person2 </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">person3 </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">person1 </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">person2 </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity