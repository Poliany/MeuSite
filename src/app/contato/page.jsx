"use client";

import { useState } from "react";

export default function contato (){
const [nome, setName] = useState("");
const [mensagem , setMensagem] = useState("");
const enviarFormulario = async (e) => {e.preventDefault();
alert(`Obrigada, ${nome}! Recebemos sua mensagem:${mensagem}.`);
};

return(
  <main className="flex flex-col itemgs-center justify-center p-6 bg-pink-50">
    <h2 className="text-3x1 font-semibold text-pink-800 mb-4">Contato</h2>
    <form onSubmit={enviarFormulario} className="flex flex-col w-full max-w-md space-y-4">
      <input type="text" placeholder="Digite Seu Nome" value={nome} onChange ={(e) => setName(e.target.value)}></input>
      <textarea placeholder="Sua Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}className="p2 border border-pink-300 rounded" ></textarea>
      <button type="submit" className="bg-pink-600 text-white py-2 rounded houve:bg-pink-500">Enviar</button>
 </form>
</main>
);

}