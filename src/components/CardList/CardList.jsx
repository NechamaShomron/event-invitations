import React from "react";
import Card from "../Card/Card";
import {INVITATIONS_ITEMS} from "./InvitationItems";
import styles from "../Home/Home.module.css";

const CardList = () => {

    const handleInvitationClicked = (cardItemClicked) => {
        console.log(cardItemClicked);
    }

return(
   <div className={styles.invitation_items}>{INVITATIONS_ITEMS.map(cardItem =>{
       return <Card key={cardItem.id} cardItem={cardItem} handleInvitationClicked={(cardItemClicked)=> {handleInvitationClicked(cardItemClicked)}}/>
    })}
    </div> 
)
}
export default CardList;