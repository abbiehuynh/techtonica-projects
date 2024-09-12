import { useState, useEffect }, React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

function EVENT() {
  const [events, setEvents] = useState([]);

  const getRequest = () => {
    fetch("http://localhost:5050/api/events")
    .then((response) => response.json())
    .then(events => {
      setEvents(events);
      console.log('Events fetched...', events);
    });
  }

  useEffect(() => {getRequest()}, []);


  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.eventname} location={event.eventlocation} time={event.eventtime}/>
            )}
    </CardGroup>
    </div>
  )
}

export default EVENT;