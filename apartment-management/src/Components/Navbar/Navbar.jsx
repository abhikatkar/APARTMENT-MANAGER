import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

export const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};
