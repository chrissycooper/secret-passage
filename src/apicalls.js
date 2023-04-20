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
    const nameSplit = poet.split(' ')
    const lastName = nameSplit[nameSplit.length-1]
  
    return fetch(`https://poetrydb.org/author/${lastName}`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}

export {getAllPoets, getPoems};
