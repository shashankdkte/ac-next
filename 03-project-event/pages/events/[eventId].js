import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "@/components/events/event-summary";
import EventLogistics from "@/components/events/event-logistics";
import EventContent from "@/components/events/event-content";

function EventDetailPage() {

  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);
  if (!event)
  {
    return <p>No Event Found</p>
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