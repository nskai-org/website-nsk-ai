import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"

const NavigationLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </div>
  )
}

export default NavigationLayout
