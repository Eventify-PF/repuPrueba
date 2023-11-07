import { formatearFecha } from "@/helpers";
const loadEvent = async(id) =>{
  const res = await fetch(`http://localhost:3001/events/${id}`);
  const data = await res.json();
  return data
}
const EventPage = async({params}) => {
  const detalEvent = await loadEvent(params.id);
  return (
      <div className="container px-5 py-24 mx-auto">
        <div className='w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img alt={detalEvent.title} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detalEvent.image}/>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-600 tracking-widest'>EVENT NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalEvent.title}</h1>
              <p className="leading-relaxed">{detalEvent.description}</p>
              <div className="flex mt-6 pb-5 border-b-2 border-gray-200 mb-5 flex-col">
                <h2 className='text-xl title-font font-bold text-gray-900 tracking-widest'>Location</h2>
                <p className="mr-3 leading-relaxed mb-4">{detalEvent.location}</p>
                <h2 className='text-xl title-font font-bold text-gray-950 tracking-widest'>Date</h2>
                <span className="badge bg-gray-700 text-blue-100 h-10 rounded px-1 py-1 text-center text-xl font-bold cursor-pointer">{formatearFecha(detalEvent.date)}</span>
              </div>
              <div className="flex">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default EventPage;
