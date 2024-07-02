import { useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios"; // Import Axios

function ChatBot() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleAskQuestion = async () => {
    if (!userInput.trim()) {
      console.error("Question is missing.");
      return;
    }

    try {
      const response = await axios.post("https://speechdia.azurewebsites.net/ask", { question: userInput });

      console.log("Response from backend:", response.data); // Log response for debugging

      const answer = response.data.answer;

      setChatHistory([...chatHistory, { user: userInput, response: answer }]);
      setUserInput("");
    } catch (error) {
      console.error("Error communicating with backend:", error);
      // Handle error scenario, e.g., show a user-friendly message
      // Optionally, you can also update state to reflect an error state
    }
  };

  return (
    <div className="bg-[#0F121A] p-4 rounded-lg shadow-md border-l-2 border-[#2D2D2D] text-white w-full">
      <div className="flex justify-between bg-[#191C24] border-2 border-[#2D2D2D] px-4 md:px-10 py-6 rounded-lg items-center mb-4">
        <h2 className="text-xl font-medium flex items-center">
          <TbLayoutSidebarLeftExpand className="mr-2" />
          AI Chat Assistant
        </h2>
      </div>
      <div className="bg-[#191C24] border-2 border-[#2D2D2D] p-4 rounded-lg">
        {chatHistory.map((chat, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-start">
              <p className="text-sm mt-4 mb-4 bg-[#0052CC] text-white px-4 py-2 rounded-lg w-1/2">{chat.user}</p>
            </div>
            <div className="flex justify-end mt-2">
              <p className="text-sm text-white bg-[#272932] px-4 py-2 rounded-lg w-1/2 text-right">{chat.response}</p>
            </div>
          </div>
        ))}
        <div className="relative mb-4 mt-32">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full p-2 rounded-md border-2 border-[#2D2D2D] bg-[#272932] text-white h-[150px] align-top"
            style={{ paddingTop: '10px', paddingRight: '40px' }}
          />
          <button
            onClick={handleAskQuestion}
            disabled={!userInput.trim()}
            className={`absolute bottom-4 right-4 px-3 py-1 rounded-md flex items-center ${
              userInput.trim() ? 'bg-[#0052CC] text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
