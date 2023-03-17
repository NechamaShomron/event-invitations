import React from "react";
import styles from './Card.module.css'


const Card = (props ) => {
  return (
    <div className={styles.card_container} onClick={() => {props.handleInvitationClicked(props.cardItem)}}>
      <img src={props.cardItem.src} alt={props.cardItem.alt} style={{ width: '100%' }} />
      <div className={styles.text_container}>פרטים נוספים</div>
    </div>
  )
}
export default Card;