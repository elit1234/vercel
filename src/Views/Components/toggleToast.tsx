const toggleToast = (check = false, message: string) => {
  const toastEl: HTMLElement = document.getElementById("toast")!;
  const toastDesc: HTMLElement = document.getElementById("toastDesc")!;
  const toastImg: HTMLElement = document.getElementById("toastImg")!;
  toastDesc.innerHTML = message;

  const checkEl = `<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>`;
  const crossEl = `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="30px" viewBox="0 0 24 24" 
        width="30px" 
        fill="#fff">
          <path 
            d="M0 0h24v24H0V0z" 
            fill="none"
          />
          <path 
            d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
          />
      </svg>
    `;

  toastEl.className = "show";
  toastImg.innerHTML = check ? checkEl : crossEl;

  setTimeout(function () {
    toastEl.className = toastEl.className.replace("show", "");
  }, 5000);
};

export default toggleToast;
