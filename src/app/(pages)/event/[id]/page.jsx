import EventDetailClient from "./EventDetailClient";
import axios from "axios";

const loadEvent = async(id) =>{
  const res = await axios.get(`https://server-eventifypro.onrender.com/events/${id}`);
  const data = await res.json();
  return data
}
export default async function EventPage ({params}){
  const detailEvent = await loadEvent(params.id);
  
  return (
      <EventDetailClient detailEvent={detailEvent}/>
  );
}

