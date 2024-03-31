import { Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';

const Nav = (props) => {
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false); 

  const handleCreateArtist = () => {
    navigate("/create-artist");
    setPopupOpen(false);
  }

  const handleSearchAlbum = () => {
    navigate("/Album");
    setPopupOpen(false);
  }

  const loggedInLink = (
    <div className="popup">
      <button onClick={props.handleLogout} className="nav-button">Logout</button>
      <button onClick={handleCreateArtist} className="nav-button">Create Artist</button>
      <button onClick={handleSearchAlbum} className="nav-button">Search Album</button>
    </div>
  )

  return (
    <nav className="navbar">
      <div>
        <Link className="nav-link" to="/">Home</Link>
      </div>
      <div>
        {props.isLoggedIn ? (
          <Popup
            trigger={<button className="nav-button" onClick={() => setPopupOpen(!popupOpen)}>Menu</button>}
            modal
            nested
            open={popupOpen}
            onClose={() => {
              console.log("Closing popup...");
              setPopupOpen(false);
            }} 
          >
            {close => (
              <div className='modal'>
                <div className='content'>
                  {loggedInLink}
                </div>
                <div>
                <button onClick={() => {close(); setPopupOpen(false);}} className="popup-button">Close Menu</button>
                </div>
              </div>
            )}
          </Popup>
        ) : (
          <div>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav;


// const Nav = () => {
//     console.log("Nav component is rendered");
//   return (
//     <nav className="navbar">
//     <div>
//       <Link to="/" className="nav-link">Home</Link>
//     </div>
//     <div>
//       <Link to="/login" className="nav-link">Login</Link>
//       <Link to="/signup" className="nav-link">Sign Up</Link>
//     </div>
//   </nav>
//   )
// } 