import useConverstion from "../../zustand/useConversation"
import { useSocketContext } from './../../context/SocketContext';
import './Sidebar.css'


const Conversation = ({conversation,lastIdx,emoji}) => {
	const {selectedConversation,setSelectedCovnersation}=useConverstion()
	const isSelected=selectedConversation?._id===conversation._id

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
  return (
		<>
			<div className={` Conversation-main 
				${isSelected? "bg-emerald-600":""}`} onClick={()=>setSelectedCovnersation(conversation)}>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='profile-pic'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='title-container'>
					<div className='title-main'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='emoji'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1 ' />}
		</>

  )
}

export default Conversation