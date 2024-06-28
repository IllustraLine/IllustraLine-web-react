import Navbar from "../components/layout/Navbar";
import Page from "../components/layout/Page";
import Tabs from "../components/layout/Tabs";

const Dashboard = () => {
  const user = {
    name: "Erikghafari",
    wallet: 1000000,
  };
  const categories = ["On-going", "Finished"];

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Page>
      <Navbar />
      <section className="mx-auto min-h-screen w-screen max-w-screen-xl rounded-xl border border-red-500 p-5">
        <div className="flex h-60 w-full items-center justify-between rounded-xl bg-blue-100 px-20">
          <span>
            <p className="text-xl font-bold">Hai ,</p>
            <h1 className="text-3xl font-black">{user.name}</h1>
          </span>

          <div>
            <div className="w-fit border-b-2 border-black">
              wallet
              <p className="text-xl font-black">
                {user.wallet.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>

        <main className="mt-5 min-h-screen w-full bg-red-50">
          <Tabs categories={categories} onTabChange={handleTabChange}></Tabs>
        </main>
      </section>
    </Page>
  );
};

export default Dashboard;
