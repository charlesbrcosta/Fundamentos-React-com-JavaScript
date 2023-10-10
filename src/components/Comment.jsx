import styles from './Comment.module.css'
import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.Comment}>
      <img src="https://www.github.com/charlesbrcosta.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Charles Bruno</strong>
              <time title="09 de outubro às 20:47" dateTime="2023-10-09 20:48:00">Há cerca de 1 hora</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}