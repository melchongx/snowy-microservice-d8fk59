function NavBar({ children }) {
  return (
    <nav className="container">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <h1>Music App Logo</h1>;
}

export default NavBar;
