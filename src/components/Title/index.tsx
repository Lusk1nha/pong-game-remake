
interface ITitleProps {
  text?: string;
}

function Title({ text }: ITitleProps) {

  return (
    <div>
      <h2 className="text-3xl tracking-wider spacing-2 font-bold text-white">
        {text}
      </h2>
    </div>
  )
}

export { Title }