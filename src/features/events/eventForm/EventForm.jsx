import React from "react";
import { Segment, Form, Header, Button } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Form>
        <Form.Field>
          <Header content='Create new event' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Event Title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' />
        </Form.Field>

        <Button positive type='submit' content='Submit' floated='right' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          content='Cancel'
          floated='right'
        />
      </Form>
    </Segment>
  );
}
