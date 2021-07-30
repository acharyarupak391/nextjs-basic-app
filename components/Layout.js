import styles from "../styles/Home.module.css"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;