const priority = (array) => {
    if (array.priority === true) {
      array.priority = false;
    } else {
      array.priority = true;
    }
};

module.exports = priority