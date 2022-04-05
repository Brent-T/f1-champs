import { NUMBER_OF_LIVES } from '~/config'

export default function Lives({ lives }: { lives: number }) {
  return (
    <section className="lives">
      <div>
        <p className="label">Lives left</p>
        <p>
          {new Array(NUMBER_OF_LIVES)
            .fill('❤️', 0, lives)
            .fill('🖤', lives, NUMBER_OF_LIVES)
            .join(' ')}
        </p>
      </div>
    </section>
  )
}
