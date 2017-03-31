function maxDefaites( portefeuille, mise, coeff ) {
    let  i = 0
    let tout = 0
    while ( tout < portefeuille ) {
        tout = tout + mise
        i++
        mise = mise * coeff
    }
    return i
}
