import axios from "axios";
export default class AutorApi {
  async buscarTodosOsAutores() {
    const { data } = await axios.get("/autor/");
    return data.results;
  }
  async adicionarAutor(autor) {
    const { data } = await axios.post("/autor/", autor);
    return data.results;
  }
  async atualizarAutor(autor) {
    const { data } = await axios.put(`/autors/${autor.id}/`, autor);
    return data.results;
  }
  async excluirAutor(id) {
    const { data } = await axios.delete(`/autors/${id}/`);
    return data.results;
  }
}