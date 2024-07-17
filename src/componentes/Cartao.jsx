import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Cores } from './Cores';

const StyledCard = styled.div`

   background-color: ${Cores.success};
   display: flex;
   flex-direction: column;
   width: 200px;
   
   align-items: center;
   padding: 10px;

  button {
    width: 100px;
  }


`

function Cartao({name, img, description}) {

  function handleClick() {
    alert(`voce clicou em ${name}`)
  }


  return (
    <StyledCard>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>Fazer Algo</button>
    </StyledCard>
  );
}

export default Cartao;