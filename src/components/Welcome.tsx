export const Welcome: React.FC = () => (
  <header className="mb-16 group">
  <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
    hi, I'm <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      vanntile 👋
    </span>
<div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <h1 className="text-center text-2xl font-bold mb-2">🤖 I'm Ryan-AI</h1>
    <p className="text-center text-md text-base/loose">
      Don't worry, I'm way smarter than Ryan(The human version) that built me  😉
    </p>
    <p className="text-center text-md text-base/loose">
       Ask questions or chat in the text box.
    </p>
    <div>
    <p className="text-center text-md font-medium mb-2 italic">Try some examples below ⬇</p>
    </div>
  </div>
);
