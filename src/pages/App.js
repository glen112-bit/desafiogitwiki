import gitlogo from '../assets/github.png'
import { Container } from './styles'
import {Input, ItemRepo, Button} from '../components/'
import {useState} from 'react'
import { api } from '../../src/services/api.js'

const App = () => {

  const [currentRepo, setCurrentRepo] = useState("")
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`)
    // const error = repos.find(repo => repo.name === 'AxiosError')
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
 
      if(!isExist) {
      
        setRepos(prev => [...prev, data]);
        // setCurrentRepo('')
        return
      }     
    }else{
      alert('no repo')
    }
    alert('ja encontrado')
 
  }
  const handleRemoveRepo = (id) =>{
    setRepos(repos.filter((repo) => repo.id !== id))
    // repos.filter((repo) => repo.id === id)
  }
    

  return (
    <Container className="App">
      <img 
      src={gitlogo} 
      width={72} 
      height={72} 
      alt='github logo'
      />
      <Input value = { currentRepo } onChange = { e => setCurrentRepo(e.target.value) }/>
      <Button Name = {'Click'} onClick = { handleSearchRepo}/>
      {
        repos.map(repo => <
        ItemRepo 
        title = { repo.owner.login } 
        subtitle = { repo.name } 
        link = {repo.html_url}
        handleRemoveRepo = { handleRemoveRepo }
        repo = { repo }
        key = { repo.id }
      />)
      }
   </Container>
  );
}

export default App;
