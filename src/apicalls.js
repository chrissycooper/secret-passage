const getAllPoets = () => {
  return fetch("https://poetrydb.org/author")
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
}

const getPoems = (poet) => { 
  if(poet === "random") {
    return fetch(`https://poetrydb.org/random/3`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
  })
  } else if (poet) {
    return fetch(`https://poetrydb.org/author/${poet}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
  }
}

export {getAllPoets, getPoems};
