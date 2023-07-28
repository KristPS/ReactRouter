import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>React Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
