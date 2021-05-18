const update = (array, h5, h6, p) => {
    array.name = h5.innerHTML;
    array.date = h6.innerHTML;
    array.description = p.innerHTML;
};
module.exports = update