//solution 1 

function stockList(listOfArt, listOfCat){
let totalBooks = 0 
  const cats = listOfCat.map(c => {
    const stockWithCat = listOfArt.filter(sl => sl.indexOf(c) === 0)
    const booksInStockList = stockWithCat.map(sl => parseInt(sl.split(' ')[1]))
    const amountOfBooks = booksInStockList.reduce( (acc, curr) => {
      return acc + curr
    }, 0)
    totalBooks += amountOfBooks
    return `(${c} : ${amountOfBooks})`
  })
  if (totalBooks === 0) return ''
  return cats.join(' - ')
};
