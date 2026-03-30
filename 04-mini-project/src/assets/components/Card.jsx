import { Bookmark } from 'lucide-react';

export default function Card(props) {

  console.log(props.company);

  return (
    <>
      <div className="parent">
        <div className="card">
          <div className="card-top">
            <img src={props.logo} alt="logo" />
            <button>Save<Bookmark size={18}  color='red'/></button>
          </div>

          <div className="card-center">
            <h3>{props.company} <span>({props.datePosted})</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>

          <div className="card-bottom">
            <div>
              <h3>${props.pay}/hour</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </>
  )
}