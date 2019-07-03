// import React from 'react';
import React from 'react';
import Image from './Image';
function Profile(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>This is a description</p>
            <Image />
        </div>
      
    );
}
 

export default Profile;