import Navbar from "../components/layout/Navbar";
import Page from "../components/layout/Page";

const Dashboard = () => {
  return (
    <Page>
      <Navbar />
      <section className="mx-auto min-h-screen w-screen max-w-screen-xl border border-red-500">
        <h1>Dashboard</h1>
      </section>
    </Page>
  );
};

export default Dashboard;
