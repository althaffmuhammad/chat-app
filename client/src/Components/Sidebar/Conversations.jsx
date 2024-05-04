import useGetCoversation from "../../hooks/useGetCoversation"
import { getRandomEmoji } from "../../utils/emojis"
import Conversation from "./Conversation"
import './Sidebar.css'


const Conversations = () => {
	const {loading, conversation}=useGetCoversation()
  return (
		<div className='Conversations-main'>
			{conversation.map((con,idx)=>(
				<Conversation key={con._id} conversation={con} emoji={getRandomEmoji()} lastIdx={idx===conversation.length-1}/>
			))}
			{loading ? <span className='loading loading-spinner'></span> : null}
		</div>
  )
}

export default Conversations