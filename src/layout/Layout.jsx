import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <p>hello</p>
      </header>
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;
