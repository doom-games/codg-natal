
// { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
var rodadas = [
    {
        numero: 1,
        games: [
            { nome: 'Duke Nukem', foto: 'duke-nukem.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Banjo Kazooie', foto: 'banjo-kazooie.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Destroy All Humans!', foto: 'destroy-all-humans.jpg', pontoAdicionar: 15, playerAdicionar: '' },
            { nome: 'GTA V: Gran Thief Auto', foto: 'gta-v.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: 'Final Fight', foto: 'final-fight.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: 'Saints Row', foto: 'saints-row.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Animal Crossing', foto: 'animal-crossing.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Just Cause', foto: 'just-cause.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: 'Death Stranding', foto: 'death-stranding.jpg', pontoAdicionar: 5, playerAdicionar: '' }
        ]
    },
    {
        numero: 2,
        games: [
            { nome: 'Crysis 3', foto: 'crysis.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'God of War: Ragnarok', foto: 'god-of-war.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Back 4 Blood', foto: 'back-4-blood.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Metroid Dread', foto: 'metroid-dread.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Battlefield 2042', foto: 'battlefield-2042.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Resident Evil 3', foto: 'resident-evil-3.jpg', pontoAdicionar: 10, playerAdicionar: '' },
        ]
    },
    {
        numero: 3,
        games: [
            { nome: 'Fallout: New Vegas', foto: 'fallout-new-vegas.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: 'Dishonored', foto: 'dishonored.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: 'Half Life', foto: 'half-life.jpg', pontoAdicionar: 15, playerAdicionar: '' },
            { nome: 'Duck Hunt', foto: 'duck-hunt.jpg', pontoAdicionar: 20, playerAdicionar: '' },
            { nome: 'Genshin Impact', foto: 'genshin-impact.jpg', pontoAdicionar: 25, playerAdicionar: '' },
            { nome: 'Lucius', foto: 'lucius.jpg', pontoAdicionar: 30, playerAdicionar: '' },
        ]
    },
    {
        numero: 4,
        games: [
            { nome: 'Hitman', foto: 'hitman.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Suspects: Mansão Mistério', foto: 'suspects.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Star Fox', foto: 'starfox.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Tekken 3', foto: 'tekken-3.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Alex Kidd in Miracle World', foto: 'alex-kidd.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Conker\'s Bad Fur Day', foto: 'conker.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Yoshi\'s Island', foto: 'yoshis-island.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'TJ Combo', foto: 'tj-combo.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Knuckles', foto: 'knuckles.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Contra', foto: 'contra.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Titanfall', foto: 'titanfall.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Ecco - the dolphin', foto: 'ecco-the-dolphin.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Golden Axe', foto: 'golden-axe.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'California Games', foto: 'californnia-games.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Bust a Groove', foto: 'bust-a-groove.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
        ]
    },
    {
        numero: 5, // Ponto é definido pelo último dígito hora:minuto da resposta. Exemplo: 10:18 -> 8 pontos
        games: [
            { nome: 'Rayman', foto: 'rayman.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Dead Rising', foto: 'dead-rising.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Bioshock Infinite', foto: 'bioshock.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Dante\'s Inferno', foto: 'dante-inferno.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Darksiders 2', foto: 'darksiders.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Bayonetta', foto: 'bayonetta.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Deus Ex: Human Revolution', foto: 'deus-ex.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Gears of War', foto: 'gear-of-war.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: 'Red Dead Redemption', foto: 'red-dead-redemption.jpg', pontoAdicionar: 0, playerAdicionar: '' },
        ]
    },
    {
        numero: 6,
        games: [
            { nome: 'The King of Fighters', foto: 'kof.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Alan Wake', foto: 'alan-wake.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Street Fighter', foto: 'street-fighter.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Final Fantasy X', foto: 'final-fantasy-x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Devil May Cry', foto: 'devil-may-cry.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Dead Space', foto: 'dead-space.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Chrono Trigger', foto: 'chrono-trigger.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Beyond Good and Evil', foto: 'beyond-good-and-evil.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Cyberpunk 2077', foto: 'cyberpunk-2077.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
        ]
    },
    {
        numero: 6.1,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
        ]
    },
];
