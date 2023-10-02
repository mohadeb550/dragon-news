import { Outlet } from "react-router-dom";


export default function Root() {
  return (
    <section className="max-w-6xl mx-auto font-poppins">

    <Outlet/>
    </section>
  )
}
