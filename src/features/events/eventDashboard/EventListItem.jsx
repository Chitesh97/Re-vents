import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendees from "./EventListAttendees";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={event.hostPhotoURL} size='tiny' circular />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description> Hosted by {event.hostedBy} </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal divided>
          {event.attendees.map((attendee) => (
            <EventListAttendees attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div> {event.description} </div>
        <Button
          onClick={() => deleteEvent(event.id)}
          color='red'
          content='Delete'
          floated='right'
        />
        <Button
          onClick={() => selectEvent(event)}
          color='teal'
          content='View'
          floated='right'
        />
      </Segment>
    </Segment.Group>
  );
}
