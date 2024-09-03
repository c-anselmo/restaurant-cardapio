import './style.css';
export default function Botoes({handleFiltro, botaoClicado})  {
    return (
        <section className="section-botoes">
            <div className="container-botoes">
                <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Entradas")}>
                    <img src="/assets/entrada.png" alt="" className="icone"/> <span>Entradas</span>
                </button>
                <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Massas")}>
                    <img src="/assets/massa.png" alt="" className="icone"/> <span>Massas</span>
                </button>
                <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Carnes")}>
                    <img src="/assets/carne.png" alt=""  className="icone"/> <span>Carnes</span>
                </button>
                <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Bebidas")}>
                    <img src="/assets/bebidas.png" alt="" className="icone"/> <span>Bebidas</span>
                </button>
                <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Saladas")}>
                    <img src="/assets/salada.png" alt="" className="icone"/> <span>Saladas</span>
                </button>
                <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Sobremesas")}>
                    <img src="/assets/sobremesa.png" alt="" className="icone"/> <span>Sobremesas</span>
                </button>
            </div>
        </section>
      );
};
