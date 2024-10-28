import SideNav from "./Partials/SideNav";
import TopNav from "./Partials/TopNav";

function Home() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <SideNav />
      <div className="w-[80%] h-screen">
        <TopNav />
      </div>
    </div>
  );
}

export default Home;
