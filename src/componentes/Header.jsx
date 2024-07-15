let estilo = {
    color: 'black',
    backgroundColor: '#ffffff'
}



export default function Header({titulo, subTitulo}) {
    return(
    <header style={estilo}>
        <h1>{titulo}</h1>
        <h2>{subTitulo}</h2>
    </header>
    )
}