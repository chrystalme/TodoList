const projectArray = [];
function localStorageSetter() {
  localStorage.clear();
  for (let i = 0; i < projectArray.length; i += 1) {
    const project = projectArray[i];
    if (project !== undefined) {
      localStorage.setItem(`project${i + 1}`, JSON.stringify(project));
    }
  }
}
export default { localStorageSetter, projectArray };
