import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment(){
  return (
    <div className={styles.comment}>
      <img 
        src="https://avatars.githubusercontent.com/u/77596710?v=4" 
        alt="Avatar" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Kenji</strong>

              <time 
                title='09 de Janeiro às 20:47h'
                dateTime="2023-09-01 20:47:20"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
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
  );
}