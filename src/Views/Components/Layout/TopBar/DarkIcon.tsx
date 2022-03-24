import { useTheme } from "next-themes";
import { useEffect } from "react";

const DarkIcon = () => {
  const { theme, setTheme } = useTheme();

  const clickedOuter = () => {
    const sunIcon: HTMLElement = document.querySelector(".sunIcon")!;
    const moonIcon: HTMLElement = document.querySelector(".moonIcon")!;

    const isDark = theme && theme === "dark" ? true : false;
    if (isDark) {
      sunIcon.style.width = "0";
      moonIcon.style.width = "3rem";
    } else {
      moonIcon.style.width = "0";
      sunIcon.style.width = "3rem";
    }
    !isDark ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const isDark = theme && theme === "dark" ? true : false;
    const sunIcon: HTMLElement = document.querySelector(".sunIcon")!;
    const moonIcon: HTMLElement = document.querySelector(".moonIcon")!;
    if (isDark) sunIcon.style.width = "3rem";
    else moonIcon.style.width = "3rem";
  }, []);

  return (
    <>
      <div
        onClick={() => {
          clickedOuter();
        }}
        className="darkIconOuter sunIcon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="gold"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
        </svg>
      </div>
      <div onClick={() => clickedOuter()} className="darkIconOuter moonIcon">
        <svg
          className="darkIconSvg"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="#6906e3"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <g>
                <path d="M11.1,12.08C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12c0,0.14,0.02,0.28,0.02,0.42 C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18c0,1.52-0.87,2.83-2.12,3.51 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C18,17.72,13.38,16.52,11.1,12.08z" />
              </g>
              <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default DarkIcon;
