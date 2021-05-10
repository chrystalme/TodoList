const backGround = (array, card) => {
  if (array.priority === true) {
    card.classList.add('bg-warning');
  }
};

module.exports = backGround;