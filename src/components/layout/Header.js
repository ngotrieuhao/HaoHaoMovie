import { useAuth } from "contexts/auth-context";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const Header = () => {
  const { userInfo } = useAuth();
  console.log("Header ~ userInfo", userInfo);
  const [navbar, setNavBar] = useState(false);
  const menuLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/movies",
      title: "Movies",
    },
    {
      url: "/tv",
      title: "TV Show",
    },
    {
      url: "/actor",
      title: "Actors",
    },
  ];

  const handleSignOut = () => {
    signOut(auth);
  };
  const changeBackground = () => {
    if (window.scrollY >= 670) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  function getLastName(name) {
    if (!name) return "User";
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }
  return (
    <header
      className={
        navbar ? "ht-header active select-none" : "ht-header select-none"
      }
    >
      <div className="w-full navbar navbar-default navbar-custom">
        <div className="flex-shrink-0 navbar-header logo">
          <NavLink end to="/">
            <img
              className="w-[70px] h-[70px]"
              src="/logocinema.png"
              alt="Logo-cinema"
            />
          </NavLink>
        </div>
        <div className="flex justify-between w-full navbar-pc">
          <div className="ml-12 text-xl font-bold nav__pc gap-x-8">
            {menuLinks.map((item) => (
              <NavLink
                key={item.title}
                end
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "text-primary active-link" : ""
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          {!userInfo ? (
            <div className="flex text-xl font-bold gap-x-8 header-right">
              <NavLink
                end
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-primary active-link" : ""
                }
              >
                Login
              </NavLink>
              <NavLink
                end
                to="/sign-up"
                className={({ isActive }) =>
                  isActive ? "text-primary active-link" : ""
                }
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="select-none header-auth">
              <span>Welcome back, </span>
              <strong>{getLastName(userInfo?.displayName)}</strong>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
        <label className="navbar-btn" for="navbar__mobile--input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
        <input
          type="checkbox"
          hidden
          id="navbar__mobile--input"
          className="nav__input"
        />
        <label for="navbar__mobile--input" className="nav__overlay"></label>

        <div className="navbar__mobile">
          <label
            className="cursor-pointer navbar__mobile--close"
            for="navbar__mobile--input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9cabb6"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <span class="nav__mobile--span"></span>
          <div className="navbar__mobile--list">
            {menuLinks.map((item) => (
              <NavLink
                key={item.title}
                end
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "text-primary active-link" : ""
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          {!userInfo ? (
            <>
              <span class="nav__mobile--span"></span>

              <div className="navbar__mobile--right">
                <NavLink
                  end
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-primary active-link" : ""
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  end
                  to="/sign-up"
                  className={({ isActive }) =>
                    isActive ? "text-primary active-link" : ""
                  }
                >
                  Sign Up
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <span class="nav__mobile--span"></span>

              <div className="navbar__mobile--auth">
                <div>
                  <span>Welcome back, </span>
                  <strong>{getLastName(userInfo?.displayName)}</strong>
                </div>

                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorComponent,
});
