import styles from "../pageStyles/mainPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import axios from "../utilits/axios";
import { useQueries } from "react-query";

async function getTest() {
  const { data } = await axios.get("/test");
  return data;
}

const MainPage = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const { data, isLoading, isError } = useQuerier(getTest());

  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.title}>Главная страница</div>

      <div>{data?.text}</div>
      <UrlDisplay currentUrl={currentUrl} />
    </div>
  );
};

export default MainPage;
