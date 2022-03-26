import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Erro() {
  return (
    <div>
      <h1> Pagina não existe </h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
