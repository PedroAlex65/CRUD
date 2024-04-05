import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [add,setAdd]= useState([])

  const pegarDados = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      console.log("tudo certo");
    } catch (error) {
      console.log(error);
    }
  };

  const adicionarDados = async () => {
    try {
      const res = await axios.get("http://localhost:8800");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <div className="App">
      <h1>Listas de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
