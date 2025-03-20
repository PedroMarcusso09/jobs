import ReactDOM from "react-dom/client"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { CompanyProvider } from "./providers/CompanyContext/index.tsx"
import { AdmProvider } from "./providers/AdmContext/index.tsx"
import { App } from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CompanyProvider>
        <AdmProvider>
          <App />
        </AdmProvider>
      </CompanyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
