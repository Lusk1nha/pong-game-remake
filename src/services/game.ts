

type GameSettings = {
  width: number;
  height: number;
  fps: number;
}

type PlayerSettings = {
  width: number;
  height: number;
  y: number;
  x: number;
  speed: number;
}

class Game {
  public settings: GameSettings;
  public player: PlayerSettings;
  private _context: CanvasRenderingContext2D | null | undefined;

  constructor(settings: GameSettings, player: PlayerSettings) {
    this.settings = settings;
    this.player = player;
  }

  init(context: CanvasRenderingContext2D) {
    this._context = context
  }

  renderPlayer() {
    if (this._context != null) {
      this._context.clearRect(0, 0, this.settings.width, this.settings.height);

      this._context.shadowColor = 'white'
      this._context.shadowBlur = 7
      this._context.fillStyle = 'white'
      this._context.fillRect(this.player.x, this.player.y, this.player.width, this.player.height)
    }
  }

  /**
   * Método responsável por mover o jogador.
   * @param keyState 
   */
  movePlayer(keyState: any) {
    if (keyState[38] || keyState[87]) {
      this.player.y -= this.player.speed

    }

    if (keyState[40] || keyState[83]) {
      this.player.y += this.player.speed
    }
  }

  /**
   * Método responsável por atualizar o jogo com as informações.
   * @param keyState 
   */
  updateGame() {
    this.renderPlayer();

    setTimeout(() => {
      requestAnimationFrame(this.updateGame.bind(this))
    }, 1000 / this.settings.fps)
  }
}


export { Game }