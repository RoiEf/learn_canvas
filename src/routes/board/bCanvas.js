import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};
function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true; // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false;
}

const Bcanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const context = canvas.getContext("2d");
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
    }
    // let ratio = getPixelRatio(context);
    // let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    // let height = getComputedStyle(canvas)
    //   .getPropertyValue("height")
    //   .slice(0, -2);

    // canvas.width = width * ratio;
    // canvas.height = height * ratio;
    // canvas.style.width = `${width}px`;
    // canvas.style.height = `${height}px`;

    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
  }, []);

  return <canvas ref={canvasRef} />;
};
//style={{ width: "100px", height: "100px" }}
export default Bcanvas;
