import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao({name, img, description}) {

  function handleClick() {
    alert(`voce clicou em ${name}`)
  }


  return (
    <div>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>Fazer Algo</button>
    </div>
  );
}

export default Cartao;