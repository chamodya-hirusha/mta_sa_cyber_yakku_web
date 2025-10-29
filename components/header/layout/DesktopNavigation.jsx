import Nav from "../navigation/HeaderNav";
import SearchBar from "../../common/SearchBar";
import CartButton from "../actions/CartButton";
import ProfileButton from "../actions/ProfileButton";
import MenuButton from "../actions/MenuButton";

export default function DesktopNavigation({
  cartCount,
  onCartClick,
  headerTabs,
  activeTab,
  setActiveTab,
  isLoggedIn,
  onLogout,
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
        />
         <MenuButton router={router} />
      </div>
    </div>
  );
}