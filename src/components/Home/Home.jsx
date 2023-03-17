import React from "react";
import CardList from "../CardList/CardList";
import SharedStyles from "../../components/Shared.module.css";


const Home = () => {
    return (
        <>
        <div className={SharedStyles.page_container}>
        <CardList />
        </div>
        </>
    )
}
export default Home;