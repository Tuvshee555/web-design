export default function ChatStatic() {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-[600px] bg-white rounded-xl shadow-lg p-4">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto flex flex-col space-y-2 mb-4">
        {/* Bot Message */}
        <div className="bg-blue-500 text-white self-start px-4 py-2 rounded-2xl max-w-xs animate-slide-in-left">
          Hello! How can I help you today?
        </div>

        {/* User Message */}
        <div className="bg-gray-300 self-end px-4 py-2 rounded-2xl max-w-xs animate-slide-in-right">
          I want to know about your services.
        </div>

        {/* Another Bot Message */}
        <div className="bg-blue-500 text-white self-start px-4 py-2 rounded-2xl max-w-xs animate-slide-in-left">
          Sure! We offer web design, SEO, and more.
        </div>
      </div>

      {/* Input (static, no JS) */}
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled
      />
    </div>
  );
}
