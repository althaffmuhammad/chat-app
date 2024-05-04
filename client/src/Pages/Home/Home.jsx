
import MessageContainer from '../../Components/Messages/MessageContainer';
import Sidebar from './../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
  return (
    <div className='homepage'>
			<Sidebar />
			<MessageContainer/>
		</div>
    // flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
  )
}

export default Home