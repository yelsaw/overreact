interface AppProps {
  message?: string;
}

const people = [{ 
  name: 'Jack Cricket', 
  title: 'Front-end Developer', 
  email: 'jack@example.com', 
  role: 'Unassigned' 
}]

function App({ message }: AppProps): JSX.Element {  
  return (
    <main className="mt-32 font-sans ml-3 mr-3">
    <div className="m-auto max-w-fit mt-4 rounded-lg border drop-shadow-lg shadow-lg bg-stone-50/40 p-7">
      <div className="bg-blue-100/50 text-slate-700 p-2 border border-black rounded-md">
        {message}
      </div>
    </div>
    </main>
  );
}

export default App;
