function loseAll( chance, portefeuille, bet, multiplicator ){
    return ( (100 - chance) / 100 )**maxLose( portefeuille, bet, multiplicator )
}
