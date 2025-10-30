import React from "react";
import "./BottomBar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "mui/icons-material/Telegram";

function BottomBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a community church dedicated to serving our congregation and
            the wider community.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="lanregrace@gmail.com@gmail.com">lanregrace@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel: 0114567890">07032381184</a>
          </p>
          <p>Address: Plot 805, beside Ayuba Wabba House, Durumi, Area1, Abuja.</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@umcachapelabuja9665"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="icon" />
            </a>
            <a
              href="https://web.facebook.com/umcachapelabuja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icon" />
            </a>
            <a
              href="https://t.me/abrahambond"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 UMCA Chapel, Abuja. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
