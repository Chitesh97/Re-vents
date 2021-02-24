import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventListAttendees({attendee}){
    return(
       <List.Item>
           <Image src={attendee.photoURL} size='mini' circular />
       </List.Item>
    )
}