var players = [
    { id: 'dorinha', nome: 'Dorinha', foto: 'dorinha.jpg', pontos: 0 },
    { id: 'marquinhos', nome: 'Marquinhos', foto: 'marquinhos.jpg', pontos: 0 },
    { id: 'camilo', nome: 'Camilão', foto: 'camilo.jpg', pontos: 0 },
    { id: 'ambrosio', nome: 'Brosnildo64', foto: 'ambrosio.jpg', pontos: 0 },
    { id: 'dida', nome: 'Casco_Dida', foto: 'dida.jpg', pontos: 0 },
    { id: 'igor', nome: 'Igor Oliveira', foto: 'igor.jpg', pontos: 0 },
    //{ id: 'hrone', nome: 'Hrone', foto: 'hrone.jpg', pontos: 0 },
    //{ id: 'junior', nome: 'Jux', foto: 'junior.jpg', pontos: 0 },
];

var rodadas = [
    {
        numero: 1,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 15, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
        ]
    },
    {
        numero: 2,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
        ]
    },
    {
        numero: 3,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 5, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 10, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 15, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 20, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 25, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 30, playerAdicionar: '' },
        ]
    },
    {
        numero: 4,
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, pontoRemover: 5, playerAdicionar: '', playerRemover: '' },
        ]
    },
    {
        numero: 5, // Ponto é definido pelo último dígito hora:minuto da resposta. Exemplo: 10:18 -> 8 pontos
        games: [
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
            { nome: '------------------', foto: 'x.jpg', pontoAdicionar: 0, playerAdicionar: '' },
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
rodadas.sort(compararRodada).forEach(function (rodada) {
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
            players.find(element => element.id == game.playerRemover).pontos = players.find(element => element.id == game.playerRemover).pontos + game.pontoRemover
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
