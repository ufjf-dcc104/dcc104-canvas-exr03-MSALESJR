/**
 * Criado por Marcus em 10/05/2017.
 */
var tela     = null;
var contexto = null;
var player   = null;
var level    = null;
var atual    = new Date();
var anterior = new Date();
var dt       = 0;
var inicia_jogo = false;

var flappy = new Image();
flappy.src = 'img/flappy.png';

function inicializaPlayer(){
    player.x  = 400;
    player.y  = 275;
    player.vy = 10;
    player.gravidade = 0;
    player.width  = 50;
    player.height = 50;
    player.image  = flappy;
}

function init(){

    tela = document.getElementById('tela');
    contexto = tela.getContext('2d');

    player = new Player();
    inicializaPlayer();

    level = new Level();
    initControls();
    requestAnimationFrame(drawFrame);
 }

 function drawFrame(){
    requestAnimationFrame(drawFrame);
    atual = new Date();
    dt = (atual  - anterior) / 1000 ;
    contexto.clearRect(0,0, tela.width, tela.height);

    if(inicia_jogo){
        if(!level.run(dt,contexto, player)){
            inicia_jogo = false;
            inicializaPlayer();
            level = new Level();
            alert("Fim de Jogo");
        }
    }else{
        contexto.font = "50px Arial";
        contexto.strokeText("FLAPPY BIRD",250,250);
        contexto.font = "15px Arial";
        contexto.strokeText("Aperte ENTER para INICIAR",320,380);
    }

    player.update(dt);
    player.mover(dt);
    player.desenha(contexto);

    anterior = atual;
 }

function initControls(){
    addEventListener('keydown', function(e){
        switch (e.keyCode){
            case 32 :
                player.vy = -50;
                break;
            case 13:
                if(!inicia_jogo){
                    player.gravidade = 10;
                    inicia_jogo = true;
                    level.tempo_corrido_depois_que_ultimo_ojeto_foi_criado = 4;
                }
                break;
        }
    });

    addEventListener('keyup', function(e){
        switch (e.keyCode){
            case 32 :
                player.vy = 20;
                break;
        }
    });
}