import BreakingNews from "./shared/BreakingNews";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav";
import Header from "./shared/Navbar/Header/Header";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RightSideNav/RightSideNav";


export default function Home() {
  return (
    <>
  <Header/>
  <BreakingNews/>
  <Navbar/>

  <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
    
    <div className="border">
    <LeftSideNav/>
    </div>

    <div className="md:col-span-2 border">
    <h2> News Coming Soon ..</h2>
    </div>

    <div className="border">
    <RightSideNav/>
    </div>
  </section>
    </>
  )
}
