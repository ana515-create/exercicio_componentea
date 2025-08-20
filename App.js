import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      <Header />
      <Cartao nome = "Jake Peralta"
          profissão = "Detetive"
          descrição = "Jake Peralta, da série Brooklyn Nine-Nine, é um detetive imaturo, mas talentoso, conhecido por sua personalidade brincalhona e sarcástica. Ele adora prender criminosos e resolver quebra-cabeças, mas tem dificuldade em amadurecer e levar as coisas a sério. Apesar de suas brincadeiras, Jake se importa profundamente com seus colegas e valoriza suas relações com eles. "
          foto = "https://i.redd.it/15nb7ti6rm0b1.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;
