import './style.css';
export default function Card({ imagem, nome, categoria, descrição, preço }) {
    return (

        <div className="card">
            <div className='figure'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='textos'>
                <h3>{nome}</h3>
                <span className='categoria'>{categoria}</span>
                <p>{descrição}</p>
                <span className='preço'>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(preço)}</span>
            </div>
        </div>
    )

}