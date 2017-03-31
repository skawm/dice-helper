function maxDefaites( portefeuille, mise, coeff ) {
    var  i = 0
    var tout = 0
    while ( tout < portefeuille ) {
    tout = tout + mise
      i = i + 1
      mise = mise * coeff
      /*debug
    	console.log('i = ' + i)
      console.log('mise = ' + mise)
      console.log('tout = ' + tout)
    */
    }
  return i
}
