import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Home;
