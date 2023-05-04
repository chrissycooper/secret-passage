const filterForNumPoems = (data) => {
   const { authors } = data;
    return fetch('https://poetrydb.org/lines/all')
    .then( res => {
      if(res.ok){
        return res.json();
      } else {
        throw new Error(res.status)
      }
    })
    .then(everything => {
      const poets = [];
      authors.forEach(author => {
       const poems = everything.filter(poem => poem.author === author);
       if(poems.length >= 3) {
        poets.push(author)
       } 
      })
      return poets;
    })
}

export default filterForNumPoems;
