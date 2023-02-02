function isValidWalk(walk) {
  function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    let north = walk.filter((d) => d === "n").length;
    let south = walk.filter((d) => d === "s").length;
    let west = walk.filter((d) => d === "w").length;
    let east = walk.filter((d) => d === "e").length;
    return north === south && west === east;
  }
}

