import React from "react";
import s from './ProfileInfo.module.css';


function ProfileInfo() {
 return (
     <div >
         <div>
             <img className={s.image}
                 src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'/>
         </div>
         <div className={s.description}>
             ava+descr
         </div>

     </div>
 )
}
export default ProfileInfo;