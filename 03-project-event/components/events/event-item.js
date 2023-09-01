import Link from 'next/link'
import React from 'react'

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year:"numeric"
  })
  const formattedAdress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li> 
      <img src={'/' + image} alt />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAdress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem