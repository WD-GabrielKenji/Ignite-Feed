import styles from './Comment.module.css';
import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDeleteComment }){
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }
  
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/2254731?v=4" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>

              <time 
                title='09 de Janeiro às 20:47h'
                dateTime="2023-09-01 20:47:20"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}