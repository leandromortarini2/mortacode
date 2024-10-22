// Asegúrate de la ruta correcta
"use client";

import { useTheme } from "../../app/Context/Context";
import "./buttonTheme.css";
export const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme(); // Consume el contexto

  return (
    <label
      id="theme-toggle-button"
      className="w-20 h-8 flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="hidden"
      />
      <svg
        viewBox="0 0 69.667 44"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-10"
      >
        <g transform="translate(3.5 3.5)" data-name="Component 15 – 1">
          <g
            filter="url(#container)"
            transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
          >
            <rect
              fill={theme === "light" ? "#83cbd8" : "#333"}
              transform="translate(3.5 3.5)"
              rx="17.5"
              height="35"
              width="60.667"
              data-name="container"
              id="container"
            ></rect>
          </g>

          {/* Sun and Moon icons */}
          <g transform="translate(2.333 2.333)" id="button">
            {theme === "light" ? (
              <g data-name="sun" id="sun">
                <g
                  filter="url(#sun-outer)"
                  transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                >
                  <circle
                    fill="#f8e664"
                    transform="translate(5.83 5.83)"
                    r="15.167"
                    cy="15.167"
                    cx="15.167"
                    data-name="sun-outer"
                    id="sun-outer-2"
                  ></circle>
                </g>
                <g
                  filter="url(#sun)"
                  transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                >
                  <path
                    fill="rgba(246,254,247,0.29)"
                    transform="translate(9.33 9.33)"
                    d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z"
                    data-name="sun"
                    id="sun-3"
                  ></path>
                </g>
                <circle
                  fill="#fcf4b9"
                  transform="translate(8.167 8.167)"
                  r="7"
                  cy="7"
                  cx="7"
                  id="sun-inner"
                ></circle>
              </g>
            ) : (
              <g data-name="moon" id="moon">
                <g
                  filter="url(#moon)"
                  transform="matrix(1, 0, 0, 1, -31.5, -5.83)"
                >
                  <circle
                    fill="#cce6ee"
                    transform="translate(31.5 5.83)"
                    r="15.167"
                    cy="15.167"
                    cx="15.167"
                    data-name="moon"
                    id="moon-3"
                  ></circle>
                </g>
                <g
                  fill="#a6cad0"
                  transform="translate(-24.415 -1.009)"
                  id="patches"
                >
                  <circle
                    transform="translate(43.009 4.496)"
                    r="2"
                    cy="2"
                    cx="2"
                  ></circle>
                  <circle
                    transform="translate(39.366 17.952)"
                    r="2"
                    cy="2"
                    cx="2"
                    data-name="patch"
                  ></circle>
                  <circle
                    transform="translate(33.016 8.044)"
                    r="1"
                    cy="1"
                    cx="1"
                    data-name="patch"
                  ></circle>
                  <circle
                    transform="translate(51.081 18.888)"
                    r="1"
                    cy="1"
                    cx="1"
                    data-name="patch"
                  ></circle>
                  <circle
                    transform="translate(33.016 22.503)"
                    r="1"
                    cy="1"
                    cx="1"
                    data-name="patch"
                  ></circle>
                  <circle
                    transform="translate(50.081 10.53)"
                    r="1.5"
                    cy="1.5"
                    cx="1.5"
                    data-name="patch"
                  ></circle>
                </g>
              </g>
            )}
          </g>
        </g>
      </svg>
    </label>
  );
};
