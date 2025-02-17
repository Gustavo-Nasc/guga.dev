import { ToggleTheme } from './ToggleTheme'
import { SheetMobile } from './SheetMobile'

export function NavbarMobile() {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <SheetMobile />
      <ToggleTheme />
    </div>
  )
}
