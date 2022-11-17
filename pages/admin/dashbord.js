import { useEffect, useMemo } from "react";
import Layout from "../../components/layout";
import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart";
// import CardPageVisits from "../components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "../components/Cards/CardSocialTraffic.js";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { isAuthenticated } from "../../utils/AuthService";

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(DataContext);
  const checkLoggedIn = async () => {
    let cuser = isAuthenticated();
    setCurrentUser(cuser);
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  // const values = useMemo(() => currentUser, [currentUser]);
  // console.log("Usememe", values);
  return (
    <Layout title="Dashbord">
      <>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div> */}
          {/* <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div> */}
        </div>
      </>
    </Layout>
  );
}
