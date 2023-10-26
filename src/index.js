import React from "react";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gz3km81vwij2b2gd.us.auth0.com"
    clientId="g1UtbtDs5PcUPYKa0MdCQPwMZBUOc5a9"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/callback'
    }}
  >
    <App />
  </Auth0Provider>
);