import Link from "next/link";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p> Test words </p>
      <Link href="/samdle">Click here to play Samdle</Link>
    </div>
  );
};

export default App;
