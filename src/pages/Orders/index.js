import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Package from '../../assets/package.svg';
import Trash from '../../assets/trash.svg';
import Button from '../../Components/Button';
import H1 from '../../Components/Title';
import { GeneralContainer, ContainerItems, Order } from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const {data: newOrder} = await axios.get('http://localhost:3001/order')

      setOrders(newOrder)
    }
    fetchOrders()
  },[])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)

    const newOrders = orders.filter((order) => order.id !== orderId)
    setOrders(newOrders)
  }

  function goBack() {
    navigate("/")
  }

  return (
        <GeneralContainer>
          <img src={Package} alt='logo'></img>
          <H1>Pedidos</H1>

          <ContainerItems>
          <ul>
            {orders.map((order) => (
              <Order key={order.id}>
                <p>{order.order}</p>
                <p>{order.clientName}</p>
                <button onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt="lixeira"/>
                </button>
              </Order>
            ))}
          </ul>

            <Button isGray={true} onClick={goBack}>Voltar</Button>
          </ContainerItems>


        </GeneralContainer>
  );
}

export default Orders;
