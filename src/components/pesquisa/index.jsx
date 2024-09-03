import './style.css';
export default function Pesquisa({ textoBuscaDigitado, handleBusca })  {
    return (
        <div className="barra">
            <label For="pesquisa"><img src="assets/lupa.png" alt="" /></label>
            <input name="pesquisa" id='pesquisa' type="text" value={textoBuscaDigitado} onChange={(event) => handleBusca(event.target.value)} placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
        </div>
      );
};
