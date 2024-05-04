
import MessageContainer from '../../Components/Messages/MessageContainer';
import Sidebar from './../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
  return (
    <div className='homepage'>
			<Sidebar />
			<MessageContainer/>
		</div>
  )
}

export default Home