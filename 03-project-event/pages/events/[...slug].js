import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents} from "../../helpers/api.util";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEventsPage(props) {
  const router = useRouter();

  // const filterData = router.query.slug;
  // if (!filterData)
  // {
  //   return <p className="center">Loading...</p>
  // }
  
 
if(props.hasError)
  
  {
    return (
      <Fragment>
        <ErrorAlert>

      <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <Button link="/events">Show all Events</Button>
      </Fragment>
      )
  }  
  const filteredEvents = props.events;
 
 
  if (!filteredEvents || filteredEvents.length === 0)
  {
    return <Fragment style={{textAlign:"center"}}>
        <ErrorAlert>

      <p>No Events Found for chosen filter</p>
      </ErrorAlert>
      <div className="center">

        <Button  link="/events">Show all Events</Button>
      </div>
      </Fragment>
  }

  const date = new Date(props.date.year, props.date.month - 1);
  console.log(date);
  console.log(filteredEvents);
  return (<Fragment>
    <ResultsTitle date={date} />
    <EventList  items={filteredEvents}/>
    
  </Fragment>
  )
}

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  
  const { params } = context;
  const filterData = params.slug;
  
  const filteredYear = filterData[0];
  const filterMonth = filterData[1];

  
  const numYear = +filteredYear;
  const numMonth = +filterMonth;
  
  if (isNaN(numYear) || isNaN(numMonth)
    || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12)
  {
    return {
      props: {
        hasError: true
      }
    }
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  })
  
  return {
    props: {
      events: filteredEvents,
      date: {
        month: numMonth,
        year: numYear

      }
    }

  }
}