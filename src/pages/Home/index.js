import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/logo.svg';
import Button from '../../Components/Button';
import H1 from '../../Components/Title';
import { GeneralContainer, ContainerItems, Label, Input } from './styles';

function Home() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  const url = "https://dev-burger-api.vercel.app"

  const navigate = useNavigate()

  async function addNewOrder() {
    const {data: newOrder} = await axios.post(`${url}/order`, {
      order: inputOrder.current.value,
      clientName: inputName.current.value
    })
    setOrders([...orders, newOrder])
    navigate("/orders")
  }

  return (
        <GeneralContainer>
          <img src={Logo} alt='logo'></img>
          <ContainerItems>
          <H1>Faça seu pedido</H1>

            <Label>Pedido</Label>
            <Input ref={inputOrder} placeholder='1 X-Burger, 1 Batata frita' />

            <Label>Nome do cliente</Label>
            <Input ref={inputName} placeholder='Fulano da Silva' />

            <Button onClick={addNewOrder}>Novo pedido</Button>
          </ContainerItems>

        </GeneralContainer>
  );
}

export default Home;
