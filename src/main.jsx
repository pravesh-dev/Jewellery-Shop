// Import necessary modules and components
import { createRoot } from "react-dom/client";
import "./index.css"; // Import the CSS file for styling
import App from "./App.jsx"; // Import the App component
import ShopContextProvider from "./Context/ShopContext.jsx"; // Import the ShopContextProvider
import AuthContextProvider from "./Context/AuthContext.jsx"; // Import the AuthContextProvider
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for client-side routing

// Create the root element and render the application
createRoot(document.getElementById("root")).render(
  <BrowserRouter> // Wrap the application with BrowserRouter for routing
    <AuthContextProvider> // Provide authentication context
      <ShopContextProvider> // Provide shop context
        <App /> // Render the App component
      </ShopContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
