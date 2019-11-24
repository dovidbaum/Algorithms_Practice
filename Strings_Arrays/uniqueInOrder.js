console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder(''))
console.log(uniqueInOrder('A'))
console.log(uniqueInOrder('AA'))
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('AADD'))
console.log(uniqueInOrder('AAD'))
console.log(uniqueInOrder('ADD'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([ 1, 2, 3, 3 ]))
console.log(uniqueInOrder([ 'a', 'b', 'b' ]))

function uniqueInOrder(iterable){
  console.log('Passed in: ' + iterable)
  let curr = 0
  let next = 1
  let result = []
  while(curr < iterable.length && next <= iterable.length){
    if(next === iterable.length || iterable[curr] != iterable[next]){
      result.push(iterable[curr])
      curr = next
    }
    next++
  }
  return result
}

