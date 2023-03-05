import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Data Lakehouse Tools</h1>
      <h3>Utilities for helping Navigate the Data Lakehouse</h3>
      <div className="row">
        <Link to="/">
          <div className="column">Home</div>
        </Link>
        <Link to="/arcticspark">
          <div className="column">Apache Iceberg Spark Config Gen</div>
        </Link>
        <Link to="/guides">
          <div className="column">Guides/Media</div>
        </Link>
      </div>
    </header>
  );
}
