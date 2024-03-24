import {create} from 'zustand';

const useConverstion = create (set => ({
  selectedConversation: null,
  setSelectedCovnersation: selectedConversation => set ({selectedConversation}),
  messgages: [],
  setMessages: messages => set ({messages}),
}));

export default useConverstion;
