import { Link, ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // Sempre que você for atualizar uma informação, e essa informação depende do valor que ela tinha anteriormente, ou seja, depende dela mesma, é sempre legal fazer atualização usando o padrão de função Arrow Function.
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  ///////////////////////////////////
  // Outra alternativa para a questão dita acima
  function handleLikeComment2() {
    const newLikeCount = likeCount + 1;

    setLikeCount(newLikeCount);
    setLikeCount(newLikeCount + 1);
  }
  //////////////////////////////////

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/Levi-Valverde.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Levi Valverde</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022/05/11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
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
