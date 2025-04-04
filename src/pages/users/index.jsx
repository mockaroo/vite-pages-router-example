import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Users;
