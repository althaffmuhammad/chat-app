import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConverstion from '../../zustand/useConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import './Message.css'

const MessageContainer = () => {
	const {selectedConversation,setSelectedCovnersation}=useConverstion()
	
	useEffect(()=>{
		setSelectedCovnersation(null)
	},[setSelectedCovnersation])
  return (
		<div className='MessageContainer'>
			{!selectedConversation ?(
				<NoChatSelected/>
			):(
			<>
				{/* Header */}  
				<div className='MessageContainer-main'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput />
			</>	
			)}
			
		</div>
  )
}

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MessageContainer