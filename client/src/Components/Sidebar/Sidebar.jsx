import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"
import './Sidebar.css'



const Sidebar = () => {
  return (
		<div className='sidebar-border'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton/>
		</div>
  )
}

export default Sidebar