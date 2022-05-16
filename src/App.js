import './App.css';
import { useEffect, useState } from 'react';

import Card from './components/Card'

function App() {

  const [username, setUsername] = useState('')
  const [url, setUrl] = useState(null)
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      await fetch(url)
      .then(res => res.json())
      .then(data => setData(data))

      console.log(data)
    }

    getData()
  }, [url])

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl('https://api.github.com/users/' + username)
  }

  return (
    <div className=''>
      
      <div className=' flex title'>
        <h2>DevFinder</h2>      
      </div>
      
      <div className=' flex searchContainer'>
        <form className='' onSubmit={handleSubmit}>
          <input
            placeholder='Search...'
            type='text'
            onChange={e => {setUsername(e.target.value)}}
          />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

      {data ? 
      <Card
        _profilePic={data?.avatar_url} 
        _username={data?.login} 
        _joinDate={data?.created_at}
        _gitUrl={data?.html_url}
        _bio={data?.bio}
        _repos={data?.public_repos}
        _followers={data?.followers}
        _following={data?.following}
        _twitter={data?.twitter_username}
        _location={data?.location}
        _blog={data?.blog_url}
        _organization={data?.organizations_url}
      /> : <h1  style={{textAlign: 'center', color: 'white'}}>Click search to begin...</h1>
      }
    </div>
  )
}

export default App;
