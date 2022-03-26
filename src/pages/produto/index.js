import { useParams } from "react-router-dom";
export default function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1> Pagina produtos </h1>
      <div>Produto numero: {id}</div>
    </div>
  );
}
