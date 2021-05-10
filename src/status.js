
const status = (array, btn) => {
    if (array.status === true) {
      array.status = false;
      btn.classList.add('btn-outline-info');
      btn.classList.remove('btn-success');
      btn.innerHTML = 'Incomplete';
    } else {
      array.status = true;
      btn.classList.remove('btn-outline-info');
      btn.classList.add('btn-success');
      btn.innerHTML = 'Completed';
    }
};

module.exports = status