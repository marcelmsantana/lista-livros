import React, { useState } from 'react';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [livrosSelecionados, setLivrosSelecionados] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const adicionarLivro = (event) => {
    event.preventDefault();
    if (titulo && autor && descricao) {
      const newLivro = { titulo, autor, descricao };
      setLivros([...livros, newLivro]);
      setTitulo('');
      setAutor('');
      setDescricao('');
    }
  };

  const handleMudarTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleMudarAutor = (event) => {
    setAutor(event.target.value);
  };

  const handleMudarDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const removerLivro = (index) => {
    const livrosAtualizados = [...livros];
    livrosAtualizados.splice(index, 1);
    setLivros(livrosAtualizados);
  };

  const exibirDescricao = (livroIndex) => {
    if (livrosSelecionados.includes(livroIndex)) {
      setLivrosSelecionados(livrosSelecionados.filter((index) => index !== livroIndex));
    } else {
      setLivrosSelecionados([...livrosSelecionados, livroIndex]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Lista de Livros</h1>
        <form onSubmit={adicionarLivro} className="mb-4">
        <input
            type="text"
            placeholder="Título do Livro"
            value={titulo}
            onChange={handleMudarTitulo}
            required
            className="rounded-lg px-4 py-2 w-full mb-2 bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="Autor do Livro"
            value={autor}
            onChange={handleMudarAutor}
            required
            className="rounded-lg px-4 py-2 w-full mb-2 bg-gray-800 text-white"
          />
          <input
            type="text"
            placeholder="Descrição do Livro"
            value={descricao}
            onChange={handleMudarDescricao}
            required
            className="rounded-lg px-4 py-2 w-full mb-2 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
          >
            Adicionar Livro
          </button>
        </form>
        <ul>
          {livros.map((livro, index) => (
            <li key={index} className="mb-4">
              <div>
                <span className="text-xl font-semibold">{livro.titulo}</span> -{' '}
                <span className="text-gray-400">{livro.autor}</span>
              </div>
              {livrosSelecionados.includes(index) && (
                <div className="mt-2">{livro.descricao}</div>
              )}
              <div className="mt-2">
                <button
                  onClick={() => exibirDescricao(index)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 mr-2"
                >
                  {livrosSelecionados.includes(index) ? 'Esconder Descrição' : 'Exibir Descrição'}
                </button>
                <button
                  onClick={() => removerLivro(index)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle-container">
        <input type="checkbox" className="toggle" id="switch" checked={darkMode} onChange={toggleDarkMode} />
        <label htmlFor="switch" className="label">
          <span className="toggle-indicator"></span>
        </label>
      </div>
    </div>
  );
}

export default App;

  