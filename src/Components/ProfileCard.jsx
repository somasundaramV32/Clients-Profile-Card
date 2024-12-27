import React from 'react';
import '../CSS/ProfileCard.css';

const ProfileCard = (props) => {
  return (
    <div className='card-container'>
        <div className='card'>
            <span className={props.status? "status online":"status offline"}>{props.status? "online":"offline"}</span>
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png" alt="" />
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.role}</p>
            <div className='buttons'>
                <button className='btn'>Message</button>
                <button className='btn1'>Following</button>
            </div>
        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <ul>
            {props.skills.map((SKILL,INDEX)=>{

            return <li key={INDEX}>{SKILL}</li>
            })}

            </ul>
        </div>

      
    </div>
  )
}

export default ProfileCard
