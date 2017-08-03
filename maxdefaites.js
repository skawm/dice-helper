function maxLose( portefeuille, bet, multiplicator ) {
    let  i = 0
    let all = 0
    while ( all < portefeuille ) {
        all = all + bet
        i++
        bet = bet * multiplicator
    }
    return i
}
