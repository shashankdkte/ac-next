import { getAllEvents } from "../../helpers/api.util";
import { useRouter } from "next/router";  
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import EventSearch from "../../components/events/event-search";
function AllEventsPage(props) {
  
  const router = useRouter()
  const { events } = props;
   
  function searchEvents(year, month)
  {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return <Fragment>
    <EventSearch onSearch={searchEvents} />
    <EventList items={events}/>
    
  </Fragment>
}

export default AllEventsPage;

export async function getStaticProps() {
  
  const events = await getAllEvents();

  return {
    props: {
      events:events
    },
    revalidate:60
  }
}