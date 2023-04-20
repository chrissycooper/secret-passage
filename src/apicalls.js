const getAllPoets = () => {
  return fetch("https://poetrydb.org/author")
    .then(res => res.json())
    .catch(err => console.log(err))
}

const getPoems = (poet) => { 
  if(poet === "random") {
    return fetch(`https://poetrydb.org/random/3`)
    .then(res => res.json())
    .catch(err => console.log(err))
  } else if (poet) {
    return fetch(`https://poetrydb.org/author/${poet}`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}

export {getAllPoets, getPoems};
