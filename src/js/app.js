function sortHeroesByHealth(heroes) {
  return [...heroes].sort((a, b) => b.health - a.health);
}
export { sortHeroesByHealth };
