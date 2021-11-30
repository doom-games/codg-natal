var players = [
    { id: 'hrone', nome: 'kmikzy360', foto: 'hrone.jpg', pontos: 0 },
    { id: 'dorinha', nome: 'Dorinha', foto: 'dorinha.jpg', pontos: 0 },
    { id: 'marquinhos', nome: 'Marquinhos', foto: 'marquinhos.jpg', pontos: 0 },
    { id: 'camilo', nome: 'Camilão', foto: 'camilo.jpg', pontos: 0 },
    { id: 'ambrosio', nome: 'Brosnildo64', foto: 'ambrosio.jpg', pontos: 0 },
    { id: 'dida', nome: 'Casco_Dida', foto: 'dida.jpg', pontos: 0 },
    { id: 'igor', nome: 'Igor Oliveira', foto: 'igor.jpg', pontos: 0 },
    //{ id: 'junior', nome: 'Jux', foto: 'junior.jpg', pontos: 0 },
];

var rodadas = [
    {
        numero: 5, // Ponto é definido pelo último dígito hora:minuto da resposta. Exemplo: 10:18 -> 8 pontos
        games: [
            { nome: 'Rayman', foto: 'rayman.jpg', pontoAdicionar: 5, playerAdicionar: 'ambrosio' },
            { nome: 'Dead Rising', foto: 'dead-rising.jpg', pontoAdicionar: 1, playerAdicionar: 'marquinhos' },
            { nome: 'Bioshock Infinite', foto: 'bioshock.jpg', pontoAdicionar: 9, playerAdicionar: 'ambrosio' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
        ]
    },
    {
        numero: 4,
        games: [
            { nome: 'Hitman', foto: 'hitman.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Suspects: Mansão Mistério', foto: 'suspects.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'camilo' },
            { nome: 'Star Fox', foto: 'star-fox.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Tekken 3', foto: 'tekken-3.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Alex Kidd in Miracle World', foto: 'alex-kidd.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Conker\'s Bad Fur Day', foto: 'conker.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'camilo' },
            { nome: 'Yoshi\'s Island', foto: 'yoshis-island.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'dida' },
            { nome: 'TJ Combo', foto: 'tj-combo.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Knuckles', foto: 'knuckles.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'Contra', foto: 'contra.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'camilo' },
            { nome: 'Titanfall', foto: 'titanfall.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'marquinhos' },
            { nome: 'Ecco - the dolphin', foto: 'ecco-the-dolphin.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: 'Golden Axe', foto: 'golden-axe.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'ambrosio' },
            { nome: 'California Games', foto: 'california-games.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'camilo' },
            { nome: 'Bust a Groove', foto: 'bust-a-groove.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: 'camilo' },
        ]
    },
    {
        numero: 3,
        games: [
            { nome: 'Fallout: New Vegas', foto: 'fallout-new-vegas.jpg', pontoAdicionar: 5, playerAdicionar: 'marquinhos' },
            { nome: 'Dishonored', foto: 'dishonored.jpg', pontoAdicionar: 10, playerAdicionar: 'camilo' },
            { nome: 'Half Life', foto: 'half-life.jpg', pontoAdicionar: 15, playerAdicionar: 'marquinhos' },
            { nome: 'Duck Hunt', foto: 'duck-hunt.jpg', pontoAdicionar: 20, playerAdicionar: 'camilo' },
            { nome: 'Genshin Impact', foto: 'genshin-impact.jpg', pontoAdicionar: 25, playerAdicionar: 'ambrosio' },
            { nome: 'Lucius', foto: 'lucius.jpg', pontoAdicionar: 30, playerAdicionar: 'ambrosio' },
        ]
    },
    {
        numero: 2,
        games: [
            { nome: 'Crysis 3', foto: 'crysis.jpg', pontoAdicionar: 10, playerAdicionar: 'camilo' },
            { nome: 'God of War: Ragnarok', foto: 'god-of-war.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: 'dida', playerRemover: 'camilo' },
            { nome: 'Back 4 Blood', foto: 'back-4-blood.jpg', pontoAdicionar: 15, playerAdicionar: 'ambrosio' },
            { nome: 'Metroid Dread', foto: 'metroid-dread.jpg', pontoAdicionar: 10, playerAdicionar: 'ambrosio' },
            { nome: 'Battlefield 2042', foto: 'battlefield-2042.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: 'ambrosio', playerRemover: 'dida' },
            { nome: 'Resident Evil 3', foto: 'resident-evil-3.jpg', pontoAdicionar: 10, playerAdicionar: 'camilo' },
        ]
    },
    {
        numero: 1,
        games: [
            { nome: 'Duke Nukem', foto: 'duke-nukem.jpg', pontoAdicionar: 10, playerAdicionar: 'camilo' },
            { nome: 'Banjo Kazooie', foto: 'banjo-kazooie.jpg', pontoAdicionar: 10, playerAdicionar: 'ambrosio' },
            { nome: 'Destroy All Humans!', foto: 'destroy-all-humans.jpg', pontoAdicionar: 15, playerAdicionar: 'marquinhos' },
            { nome: 'GTA V: Gran Thief Auto', foto: 'gta-v.jpg', pontoAdicionar: 5, playerAdicionar: 'camilo' },
            { nome: 'Final Fight', foto: 'final-fight.jpg', pontoAdicionar: 5, playerAdicionar: 'hrone' },
            { nome: 'Saint\'s Row', foto: 'saints-row.jpg', pontoAdicionar: 10, playerAdicionar: 'dida' },
            { nome: 'Animal Crossing', foto: 'animal-crossing.jpg', pontoAdicionar: 10, playerAdicionar: 'ambrosio' },
            { nome: 'Just Cause', foto: 'just-cause.jpg', pontoAdicionar: 5, playerAdicionar: 'marquinhos' },
            { nome: 'Death Stranding', foto: 'death-stranding.jpg', pontoAdicionar: 5, playerAdicionar: 'camilo' }
        ]
    },
    {
        numero: 6,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
        ]
    },
];

let htmlRodadas = '';
//rodadas.sort(compararRodada).forEach(function (rodada) {
rodadas.forEach(function (rodada) {
    htmlRodadas += `
        <div class="trending__product">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="section-title">
                    <h4>${rodada.numero}ª Rodada</h4>
                </div>
            </div>
        </div>
        <div class="row">
        `;
    rodada.games.forEach(function (game) {
        if (players.find(element => element.id == game.playerAdicionar)) {
            players.find(element => element.id == game.playerAdicionar).pontos = players.find(element => element.id == game.playerAdicionar).pontos + game.pontoAdicionar;
        }
        if (game.playerRemover) {
            players.find(element => element.id == game.playerRemover).pontos = players.find(element => element.id == game.playerRemover).pontos - game.pontoRemover
        }
        htmlRodadas += `
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="img/games/${game.foto}" style='background-image: url("img/games/${game.foto}");'>
                                        <div class="comment"><i class="fa fa-arrow-up"></i> ${(players.find(element => element.id == game.playerAdicionar) ? players.find(element => element.id == game.playerAdicionar).nome : '')} : ${game.pontoAdicionar}</div>
                                        ${game.playerRemover !== undefined ? '<div class="view"><i class="fa fa-arrow-down"></i> ' + (players.find(element => element.id == game.playerRemover) ? players.find(element => element.id == game.playerRemover).nome : '') + ' : ' + game.pontoRemover + '</div>' : ''}
                                    </div>
                                    <div class="product__item__text">
                                        <h5><a href="#">${game.nome}</a></h5>
                                    </div>
                                </div>
                            </div>
                    `;
    });
    htmlRodadas += '</div></div>';
});
document.getElementById('div-rodadas').insertAdjacentHTML('beforeend', `${htmlRodadas}`);

posicao = 1;
players.sort(compararPlayer).forEach(function (player) {

    let icon = posicao === 1 ? 'fa-trophy' : 'fa-gamepad';
    posicao++;

    document.getElementById('div-players').insertAdjacentHTML('beforeend',
        `
    <div class="product__sidebar__view__item set-bg mix day years"
      data-setbg="img/players/${player.foto}" style='background-image: url("img/players/${player.foto}");'>
      <div class="ep">${player.nome}</div>
      <div class="view"><i class="fa ${icon}"></i> ${player.pontos}</div>
    </div>
    `);
});

function compararPlayer(a, b) {
    if (a.pontos > b.pontos) {
        return -1;
    }
    if (a.pontos < b.pontos) {
        return 1;
    }
    return 0;
}

function compararRodada(a, b) {
    if (a.numero < b.numero) {
        return -1;
    }
    if (a.numero > b.numero) {
        return 1;
    }
    return 0;
}
