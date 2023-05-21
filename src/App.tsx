import { useEffect, useRef } from "react";
import { Title } from "./components/Title"
import { Game } from "./services/game";

function App() {
  let keyState: any = {}

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const game = new Game(
    {
      width: 1000,
      height: 540,
      fps: 144
    },
    {
      width: 7,
      height: 66,
      x: 45,
      y: 540 / 2,
      speed: 144 / 25
    }
  );

  useEffect(() => {
    const contextCanvas = canvasRef.current?.getContext("2d");

    if (contextCanvas != null) {

      window.addEventListener('keydown', function (e: any) {
        keyState[e.keyCode || e.which] = true
      }, true)

      window.addEventListener('keyup', function (e: any) {
        keyState[e.keyCode || e.which] = false
      }, true)

      game.init(contextCanvas);

      setInterval(() => game.movePlayer(keyState), 10)
      game.updateGame();
    }
  }, []);

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center p-10 gap-y-4">
      <Title text="Pong Game" />

      <canvas
        ref={canvasRef}
        width={game.settings.width}
        height={game.settings.height}
      />
    </div>
  )
}

export default App
