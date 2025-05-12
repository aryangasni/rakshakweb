import React, { useEffect } from "react";

function ThemeSwitcher() {
  useEffect(() => {
    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const setTheme = (theme) => {
      const resolvedTheme =
        theme === "auto"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme;

      document.documentElement.setAttribute("data-bs-theme", resolvedTheme);

      // Update button states
      document.querySelectorAll("[data-bs-theme-value]").forEach((button) => {
        const isActive = button.getAttribute("data-bs-theme-value") === theme;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
      });
    };

    // Initialize theme
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll("[data-bs-theme-value]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (light)"
      >
        <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#sun-fill"></use>
        </svg>
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="auto"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
