import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Recent from "../components/Recent";
import DailyRank from "../components/dailyRank";

export default function App() {
  return (
    <div className="App">
      <div className="main--background">
        <div className="main--title">
          <Logo width="320px" height="100px" />
        </div>
        <div className="main--wrapper">
          <SearchBar />
        </div>
        <div className="main--wrapper">
          <Recent />
          <DailyRank />
        </div>
      </div>
    </div>
  );
}

App.checkSubLayout = function checkSubLayout(page) {
  return (
    <Layout>
      <Footer>{page}</Footer>
    </Layout>
  );
};
