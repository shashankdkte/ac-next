import { useRouter } from "next/router";
import { getEventById } from "../../helpers/api.util";
import { Fragment } from "react";
import EventSummary from "@/components/events/event-summary";
import EventLogistics from "@/components/events/event-logistics";
import EventContent from "@/components/events/event-content";
import { getAllEvents , getFeaturedEvents} from "../../helpers/api.util";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event)
  {
    return <div className="center">
     <p> No Event Found</p>
    </div>
    }
  return (
    <Fragment>
      <EventSummary  title={event.title}/>
      <EventLogistics date={event.date}
        address={event.address || " "}
        image={event.image}
      imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage;

export async function getStaticProps(context)
{
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent:event
    },
    revalidate:30 
  }
};

export async function getStaticPaths()
{

  const events = await getFeaturedEvents();
  const paths = events.map(event => ({params:{eventId:event.id}}))
  return {
    paths: paths,
    fallback:true
  }
}