let canAliceWin = function(n) {
    let remove = 10;
    let alice = true;

    while (n >= remove) {
        n -= remove;
        remove--;
        alice = !alice;
    }

    return !alice;
};