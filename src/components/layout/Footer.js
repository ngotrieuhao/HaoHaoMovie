import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";
import { useRef } from "react";

const Footer = () => {
  return (
    <div>
      <footer className="select-none footer">
        <div className="footer__wrapp">
          <div className="footer__wrapp--parent">
            <div className="footer__wrapp--item1">
              <div className="flex items-center justify-center mb-5">
                <div className=" footer__wrapp--item1--logo">
                  <Link end to="/">
                    <img
                      className="flex-1 flex-shrink-0 footer__logo"
                      src="./logocinema.png"
                      alt="Footer Logo"
                    />
                  </Link>
                </div>
                <div className="footer__wrapp--item1--name">
                  <span className="footer__namelogo1">HaoHao </span>
                  <span className="footer__namelogo2">Cinema</span>
                </div>
              </div>

              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p
                style={{
                  marginTop: 10,
                }}
              >
                Call us: <a href="/#">+(84) 090 1509 871</a>
              </p>
            </div>
            <div className="footer__wrapp--item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Blockbuster</a>
                </li>
                <li>
                  <a href="/#">Contact Us</a>
                </li>
                <li>
                  <a href="/#">Forums</a>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
                <li>
                  <a href="/#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="wrapp-item--3n4">
              <div className="footer__wrapp--item3">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="/#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/#">Security</a>
                  </li>
                </ul>
              </div>
              <div className="footer__wrapp--item4">
                <h4>Account</h4>
                <ul>
                  <li>
                    <a href="/#">My Account</a>
                  </li>
                  <li>
                    <a href="/#">Watchlist</a>
                  </li>
                  <li>
                    <a href="/#">Collections</a>
                  </li>
                  <li>
                    <a href="/#">User Guide</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center footer__wrapp--item5">
              <h4>Follow Us</h4>
              <div className="flex text-[#666] gap-x-4 items-center justify-center ">
                <Link to="/https://www.facebook.com/ngotrieuhao/">
                  <BsFacebook
                    size={"1.5em"}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#dd003f")
                    }
                    onMouseOut={({ target }) => (target.style.color = "#666")}
                  ></BsFacebook>
                </Link>
                <Link to="/https://www.facebook.com/ngotrieuhao/">
                  <BsInstagram
                    size={"1.5em"}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#dd003f")
                    }
                    onMouseOut={({ target }) => (target.style.color = "#666")}
                    className="icon-facebook"
                  ></BsInstagram>
                </Link>
                <Link to="/https://www.facebook.com/ngotrieuhao/">
                  <BsYoutube
                    size={"1.95em"}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#dd003f")
                    }
                    onMouseOut={({ target }) => (target.style.color = "#666")}
                    className="icon-facebook"
                  ></BsYoutube>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span>@ ngotrieuhao</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default withErrorBoundary(Footer, {
  FallbackComponent: ErrorComponent,
});
