import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConverstion from "../../zustand/useConversation";
import useGetCoversation from "../../hooks/useGetCoversation";
import toast from "react-hot-toast";
import './Sidebar.css'

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedCovnersation } = useConverstion();
	const { conversation } = useGetCoversation();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversations = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversations) {
			setSelectedCovnersation(conversations);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
		<form className='sidebar-from' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='sidebar-form-input'
			value={search} onChange={(e)=>setSearch(e.target.value)}/>
			<button type='submit' className='sidebar-form-btn'>
				<IoSearchSharp className='sidebar-form-icon' />
			</button>	
		</form>
  )
}

export default SearchInput