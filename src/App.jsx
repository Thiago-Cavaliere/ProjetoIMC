// Tudo está em português para melhor entendimento para didática

import { useState } from "react";

export default function App() {
  // Estados para armazenar os valores digitados pelo usuário
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Preencha o peso e a altura corretamente!");
      return;
    }

    // Convertendo os valores para número
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // Convertendo cm para metros

    // Calculando o IMC
    const imc = pesoNum / (alturaNum * alturaNum);

    // Definindo a categoria do IMC
    let categoria = "";
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidade";
    }

    // Definindo o resultado final
    setResultado(`${nome}, seu IMC é ${imc.toFixed(2)} (${categoria}).`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de IMC</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="mb-4 p-2 border rounded"
      />

      <button
        onClick={calcularIMC}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Calcular IMC
      </button>

      {resultado && (
        <p className="mt-4 p-2 bg-white border rounded">{resultado}</p>
      )}
    </div>
  );
}
