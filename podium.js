let tab = new Array(10, 20, 30, 40, 50);

const podium = () => {
  tab.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
  return (tab.slice(0, 3));
}

console.log(podium(tab))