import './style.css'
import CardSuccess from '../../components/cards/CardSuccess.jsx';
import Icon from '../../assets/close-circle-svgrepo-com.svg'
import api from '../../services/api.js'
import { useEffect, useState, useRef } from 'react';
import CardRemove from '../../components/cards2/CardRemove.jsx';


function Home() {

  const [users, setUsers] = useState([])
  const [clicked, setClick] = useState(false)
  const [del, setDel] = useState(false);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/users');

    setUsers(usersFromApi.data)
  };

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    });

    getUsers();
  };

  const handleClick = () => {
    createUsers();

    setTimeout(() => {
      setClick(true);
    }, 1000);
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()

    setInterval(() => {
      setDel(true)
    }, 1000);

  };

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' name='name' type='text' ref={inputName} />
          <input placeholder='Idade' name='age' type='number' ref={inputAge} />
          <input placeholder='Email' name='email' type='email' ref={inputEmail} />
          <input placeholder='Senha' name='password' type='password' ref={inputPassword} />
          <button type="button" onClick={handleClick}>Cadastrar</button>
        </form>

        {clicked && <CardSuccess />}

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age} </span></p>
              <p>Email: <span> {user.email}</span></p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img width='40px' src={Icon} alt="Icone" />
            </button>
          </div>
        ))}
        {del && <CardRemove/>}
      </div>
    </>
  )
}

export default Home
