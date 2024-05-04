import Message from "./Message"
import useGetMessages from './../../hooks/useGetMessages';
import MessageSkeleton from "../Skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";



const Messages = () => {
	const {loading,messages}=useGetMessages()
	useListenMessages()

	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
	<div className='messages-main'>
			{messages&&messages.map((message) => (
					<div key={message._id}ref={lastMessageRef}>
						<Message message={message} />
					</div>			
				))}
			{loading ?<MessageSkeleton />:null}
	</div>
	// <div className='px-4 flex-1 overflow-auto'>
	// 		{messages&&messages.map((message) => (
	// 				<div key={message._id}ref={lastMessageRef}>
	// 					<Message message={message} />
	// 				</div>			
	// 			))}
	// 		{loading ?<MessageSkeleton />:null}
	// </div>

  )
}

export default Messages

