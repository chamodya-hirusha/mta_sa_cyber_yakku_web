"use client";

import AdditionalMenu from "../navigation/AdditionalMenu";
import LoginPopup from "../popup/LoginPopup";

export default function SideNavFooterMenu({
  isLoggedIn,
  setIsLoggedIn,
  setUser,
  loginPopupOpen,
  setLoginPopupOpen,
  setShowSidenav,
}) {
  return (
    <>
      <AdditionalMenu
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setLoginPopupOpen={setLoginPopupOpen}
        setUser={setUser}
      />
      <LoginPopup
        isOpen={loginPopupOpen}
        onClose={() => setLoginPopupOpen(false)}
        onLogin={(userData) => {
          setUser(userData);
          setIsLoggedIn(true);
          setLoginPopupOpen(false);
          setShowSidenav(false);
        }}
      />
    </>
  );
}
