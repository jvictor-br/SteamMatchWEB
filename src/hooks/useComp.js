export const addComp = (
  toogleChave,
  cards,
  addHandle,
  setCards,
  setAddHandle,
  addCodHandle
) => {
  return (event) => {
    if (toogleChave === "toogleatv") {
      event.preventDefault();
      const cdb = [...cards, addHandle];
      const filtrado = [...new Set([...cdb])];
      setCards(filtrado);
      setAddHandle("");
    }
    if (toogleChave === "toogledtv") {
      event.preventDefault();
      const pesq = addCodHandle.split(",");
      var cbd = [...cards];
      pesq.map((e) => {
        return (cbd = [...cbd, e]);
      });
      const filtrado = [...new Set([...cbd])];
      setCards(filtrado);
      setAddHandle("");
    }
  };
};
