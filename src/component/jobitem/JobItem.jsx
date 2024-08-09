/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './JobItem.css'

// import TESTIMG from '../../assets/images/loop-studios.svg';


const JobItem = ( { eachjob}) => {

  const Array = [...eachjob.languages, ...eachjob.tools]
  return (
    <div className='jobitem' style={eachjob.new == true ? {borderLeft: '2px solid hsl(180px, 29%, 50%)'} : null}>
      <img src={eachjob.logo} alt="" />
      <div className='jobinfo'>
        <div className='fristrowinfo'>
          <label className='companyname'>{eachjob.company}</label>

{
  eachjob.new == true ? <p className='newlabel'>new!</p> : null
}

{
  eachjob.featured == true ? <p className='featuredlabel'>featured</p> : null
}        
      
        </div>

        <p className='positions'>{eachjob.position}</p>

      <ul className='lastrowinfo' >
      <li>{eachjob.postedAt}</li>
      <li>{eachjob.contract}</li>
      <li>{eachjob.location}</li>
      </ul>

      </div>

      

      <div className='btn'>

{
  Array.map(((name, index) => {
    return <button key={index}>{name}</button>
  }))
}

      </div>
    </div>
  );
}

export default JobItem;
