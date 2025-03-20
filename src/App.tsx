import { Reset } from "./Styles/reset"
import { GlobalStyle } from "./Styles/GlobalStyle"
import { RoutesMain } from "./routes/routesMain"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <>
        <Reset />
        <GlobalStyle />

        <div className="app">
        <RoutesMain />
        </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={true}
        theme="dark"
       />
    </>
  )
}
