
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";


const fetchIssues= async()=>{
    const result = await fetch("/data.json")
    return result.json()
  }

function App() {
  const fetchPromise=fetchIssues();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={"Loading..."}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
