
import './navbar.css'

function Navbar () {


  return(
    <div className="navigasion">
    <nav className="dropdownmenu">
    <div className="nav-logo">
      Company
    </div>
      
     <ul>
      <li><a href="">ABOUT</a></li>
      <li><a href="">OUR WORK</a>
      <ul id="submenu">
        <li><a>HISTORY</a></li>
        <li><a>VISION MISSION</a></li>
      </ul>
      </li>
      <li><a href="">OUR TEAM</a></li>
      <li><a href="">CONTACT</a></li>
     </ul>
    
    </nav>
    </div>
  )
}

export default Navbar