import APPTest from "@src/__TESTS__";
import styles from './App.module.scss';
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (< div className={styles.container}>
    <Loader />
    <Header/>
    <ToastContainer/>
    <Outlet/>
  </div>
  );
}