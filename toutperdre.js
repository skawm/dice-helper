function toutPerdre( chance, portefeuille, mise, coeff ){
    return ( (100 - chance) / 100 )**maxDefaites( portefeuille, mise, coeff )
}
