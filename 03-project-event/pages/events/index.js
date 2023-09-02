import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import EventSearch from "../../components/events/event-search";
function AllEventsPage() {
  const events = getAllEvents();

  return <Fragment>
    <EventSearch />
    <EventList items={events}/>
    
  </Fragment>
}

export default AllEventsPage;