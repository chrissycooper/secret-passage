const getAllPoets = () => {
  return fetch("https://poetrydb.org/author")
  .then(res => res.json())
  .catch(err => console.log(err))
}

export default getAllPoets;