import { h } from 'preact';
import style from './style.css';
import Canvas from "../../components/canvas";


let arr = [{x:50, y:50},{x:100,y:100}] ;

const Home = () => {
	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "#000000";
		arr.forEach(element => {
			ctx.beginPath();
			ctx.arc(element.x, element.y, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
			ctx.fill();
		});
	  };

	  return (
		<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Canvas draw={draw} />
	</div>
	);
};

export default Home;
