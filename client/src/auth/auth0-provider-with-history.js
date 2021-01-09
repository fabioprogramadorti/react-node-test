import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-bjo1lgzg.us.auth0.com"
  const clientId = "ZWXX2Rbods3p2WTXRCTh75VhTJPgo93D"

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
			cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
