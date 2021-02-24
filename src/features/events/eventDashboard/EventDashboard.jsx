import React, {useState} from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import {sampleData} from '../../../app/api/sampleData.js';

export default function EventDashboard({formOpen, setFormOpen}) {
  const [State, setState] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && 
        <EventForm setFormOpen = {setFormOpen} /> }
      </Grid.Column>
    </Grid>
  );
}