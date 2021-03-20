export const zoomIn = (event, img) => {
  const target = event.target;
  let clientX = event.clientX - target.offsetLeft;
  let clientY = event.clientY - target.offsetTop;

  const mWidth = target.offsetWidth;
  const mHegiht = target.offsetHeight;

  clientX = (clientX / mWidth) * 100;
  clientY = (clientY / mHegiht) * 100;
  img.style.backgroundPosition = `${clientX}% -${clientY}% `;
  img.style.transform = `scale(1.3)`;
};
