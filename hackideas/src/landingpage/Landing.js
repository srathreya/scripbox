import React, { useState } from "react";
import './landing.css'
import Users  from "../Users";
import _, { sum } from 'lodash'
export default function Landing() {

    const [empId, setempId] = useState('');
    const handleUserName = e => {

        setempId(e.target.value);
        //console.log(Users)
      };

      const getUserAuthentication = () => {
        var usersauth = _.filter(Users, {
            'empid': empId,
            
          });
          console.log(usersauth)
      }
      
    return (
        <div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 outerbackground'>
<center>
            
  <div class="   firstcontainer">
      <div>
  <input type="text" name="username" onChange={handleUserName} />
  <button type="button" class="btn btn-primary" onClick={() =>getUserAuthentication()}>Primary</button>
  </div>
</div>

  

</center>

            </div>
            
        </div>
    )
}
