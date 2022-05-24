/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: "siteColor",
    }}
  >
    {children}
    <link rel="alternate" type="application/rss+xml"
    href="/feed.xml" title="RSS">
  </header>
)

export default Header
 
