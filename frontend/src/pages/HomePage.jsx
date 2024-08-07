import "./homePage.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TableContent from "../components/TableContent";

function HomePage() {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <TableContent />
      </main>
    </div>
  );
}

export default HomePage;
