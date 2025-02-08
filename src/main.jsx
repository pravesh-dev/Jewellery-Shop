import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AuthContextProvider>
)
