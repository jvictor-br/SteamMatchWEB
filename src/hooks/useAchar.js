export const useAchar = (players, findDuplicates, setGameList) => {
  return () => {
    var appid = [];
    var final = [];
    const listadegames = players.map((e) => {
      return e.games;
    });
    listadegames.map((a, i) => {
      var todos = [];
      a.map((r) => todos.push(r));
      const apenasid = todos.map((a) => {
        return a.appid;
      });
      return appid.push(apenasid);
    });
    appid.map((c, i) => {
      if (i > 0) {
        const nova = final.concat(c);
        const duplicates = findDuplicates(nova);
        const filtrado = [...new Set([...duplicates])];
        return (final = filtrado);
      } else {
        return (final = c);
      }
    });
    setGameList(final);
  };
};
