export default function toggleFunc() {
  const firstLine = document.querySelector(".firstLine")!;
  const secondLine = document.querySelector(".secondLine")!;
  const thirdLine = document.querySelector(".thirdLine")!;

  const isActive = firstLine.classList.contains("checked");
  const sidebarWrapper: HTMLElement =
    document.querySelector(".sidebarWrapper")!;
  sidebarWrapper.style.width = isActive ? "0" : "100%";
  firstLine.classList.toggle("checked");
  secondLine.classList.toggle("checked");
  thirdLine.classList.toggle("checked");
}
