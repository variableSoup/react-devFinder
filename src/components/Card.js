import pin from '../assets/pin.png'
import twitter from  '../assets/twitter.png'
import company from '../assets/enterprise.png'
import link from '../assets/link.png'

function Card(props) {
    
    return(
                
        <div className='container flex call-to-action noresize' style={{marginTop:'30px', alignContent: 'center', backgroundColor: 'var(--clr-grey)'}}>
    
          <div className="call-to-action noresize" style={{marginTop: '25px',}}>
            <img src={props._profilePic} alt='profile-pic' style={{borderRadius: '50%', width: '165px'}}/>
          </div>
          
          <div className="call-to-action" style={{marginTop: '25px'}}>
            
            <div className='flex' style={{alignItems: 'center'}}>
              <h1 style={{marginRight: 'auto'}}>{props._username}</h1>
              <h4>{props._joinDate}</h4>
            </div>
            
            <p style={{marginTop: '2px'}}>@{props._username}</p>
            <p style={{marginTop: '20px'}}>{props._bio}</p>
            
            <div className='flex socialBox call-to-action' style={{marginTop: '25px'}}>
              
              <div>
                <p>Repos</p>
                <p>{props._repos}</p>
              </div>

              <div>
                <p>Followers</p>
                <p>{props._followers}</p>
              </div>

              <div>
                <p>Folowing</p>
                <p>{props._following}</p>
              </div>

            </div>

            <div className='call-to-action' style={{justifyContent: 'center'}}>

            <div className='flex call-to-action' style={{marginTop: '10px'}}>
              
              <div className='flex' style={{marginRight: 'auto'}}>
                <img src={pin} alt='location-icon' style={{width: '25px'}}/>
                <p>{props._location}</p>
              </div>

              <div className='flex'>
                <img src={twitter} alt='twitter-icon' style={{width: '25px'}}/>
                <p>{props._twitter}</p>
              </div>
            </div>

            

            <div className='flex call-to-action' style={{marginTop: '15px'}}>
              <div className='flex' style={{marginRight: 'auto'}}>
                <img src={link} alt='link-icon' style={{width: '25px'}}/>
                <p>{props._blog}</p>
              </div>

              <div className='flex'>
                <img src={company} alt='comopany-icon' style={{width: '25px'}}/>
                <p>{props._organization}</p>
              </div>
            </div>

            </div>

          </div>
        </div>
    )
}

export default Card 