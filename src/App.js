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
    }

    getData()
  }, [url])

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl('https://api.github.com/users/' + username)
  }

  return (
    <div className='box text-white call-to-action noresize'>
      
      <div className='flex call-to-action' style={{alignItems: 'center'}}>
        <h2 style={{marginRight: 'auto'}}>DevFinder</h2>
        <h4>Light</h4>      
      </div>
      
      <form className='call-to-action' onSubmit={handleSubmit} style={{marginTop: '25px'}}>
        <input 
          style={{paddingLeft: '5em'}}
          placeholder='username'
          type='text'
          onChange={e => {setUsername(e.target.value)}}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>

      {data ? 
      <Card
        _profilePic={data?.avatar_url} 
        _username={data?.login} 
        _joinDate={data?.created_at}
        _bio={data?.bio}
        _repos={data?.public_repos}
        _followers={data?.followers}
        _following={data?.following}
        _twitter={data?.twitter_username}
        _location={data?.location}
        _blog={data?.blog_url}
        _organization={data?.organizations_url}
      /> : <h1>No User Found!</h1>
      }
    </div>
  )
}

export default App;
