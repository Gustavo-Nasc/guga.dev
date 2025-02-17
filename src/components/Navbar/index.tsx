import { NavbarMobile } from './NavbarMobile'
import { NavbarWeb } from './NavbarWeb'

export function Navbar() {
  return (
    <div className="w-screen p-8">
      <div className="mx-auto w-full max-w-7xl">
        <NavbarMobile />
        <NavbarWeb />
      </div>
    </div>
  )
}
