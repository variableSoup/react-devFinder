import pin from '../assets/pin.png'
import twitter from  '../assets/twitter.png'
import company from '../assets/enterprise.png'
import link from '../assets/link.png'

function Card(props) {
    
    return(
                
        <div className='grid infoGrid'>
    
          <div className='flex profilePic '>
            <img src={props._profilePic} alt='profile-pic'/>
          </div>
          
          <div className="grid info-section ">
            
            <div className='username'>
              <h1 className=''>{props._username}</h1>
            </div>
            
            <h4 style={{fontSize: 'var(--fs-200)', color: 'grey'}}>Created:  {props._joinDate}</h4>
            <a href={props._gitUrl} style={{marginTop: '1px'}}>@{props._username}</a>
            
            <article className="info ">
              <p className='bio'>{props._bio}</p>

              <div className='flex socialBox'>  
                  <div>
                    <p>Repos</p>
                    <p style={{textAlign: 'center'}}>{props._repos}</p>
                  </div>
                  <div>
                    <p>Followers</p>
                    <p style={{textAlign: 'center'}}>{props._followers}</p>
                  </div>
                  <div>
                    <p>Folowing</p>
                    <p style={{textAlign: 'center'}}>{props._following}</p>
                  </div>
              </div>
            </article>

            <article className='info ' style={{justifyContent: 'center'}}>

              <div className='flex ' style={{justifyContent: 'center'}}>
                <div className='flex'>
                  <img src={pin} alt='location-icon' style={{width: '25px'}}/>
                  <p>{}</p>
                </div>
                <div className='flex'>
                  <img src={twitter} alt='twitter-icon' style={{width: '25px'}}/>
                  <p>{}</p>
                </div>
              </div>

              <div className='flex' style={{marginTop: '15px', justifyContent: 'center'}}>
                <div className='flex'>
                  <img src={link} alt='link-icon' style={{width: '25px'}}/>
                  <p>{}</p>
                </div>
                <div className='flex'>
                  <img src={company} alt='company-icon' style={{width: '25px'}}/>
                  <p>{}</p>
                </div>
              </div>

            </article>

          </div>
        </div>
    )
}

export default Card 