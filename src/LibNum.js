const LibNum = {
  getRandom(max, min = 1) {
    if (max === 1) {
      return Math.random;
    }

    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports =  LibNum;
