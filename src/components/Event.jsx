import './Event.css';

const Event = (props) => {
  return (
    <div className="Event">
      <h3>{props.title}</h3>
      <p className="description">{props.description}</p>
      <p className="time">{props.time}</p>
      <p className="location">{props.location}</p>
    </div>
  )
}

export default Event;