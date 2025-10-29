import Nav from "./HeaderNav";
import SearchBar from "../common/SearchBar";
import CartButton from "./CartButton";
import ProfileButton from "./ProfileButton";

export default function DesktopNavigation({
  cartCount,
  onCartClick,
  headerTabs,
  activeTab,
  setActiveTab,
  isLoggedIn,
  onLogout,
  profileOpen,
  setProfileOpen,
  router
}) {
  return (
    <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
      {/* HeaderNav Tabs */}
      <div className='md:hidden xl:flex'>
        <Nav />
      </div>

      {/* Search Bar in the middle */}
      <SearchBar />

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        <CartButton cartCount={cartCount} onCartClick={onCartClick} />
        <ProfileButton
          isLoggedIn={isLoggedIn}
          onLogout={onLogout}
          router={router}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
        />
      </div>
    </div>
  );
}