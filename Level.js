/**
 * Criado por Marcus em 10/05/2017.
 */
function Level()
{
    this.tempo_entre_obstaculo = 4;
    this.tempo_corrido_depois_que_ultimo_ojeto_foi_criado = 0;
    this.obstaculo = [];
    this.tempo_corrido_desde_do_inicio_do_jogo = 0;
}

Level.prototype.run = function(dt, contexto, player){
    contexto.fillText(Math.floor(this.tempo_corrido_desde_do_inicio_do_jogo) + ' s',20, 20);
    this.tempo_corrido_desde_do_inicio_do_jogo += dt;
    this.tempo_corrido_depois_que_ultimo_ojeto_foi_criado += dt;

    if(this.tempo_corrido_depois_que_ultimo_ojeto_foi_criado >= this.tempo_entre_obstaculo){
        var newObstaculo_1 = new Sprite();
        newObstaculo_1.height = (Math.random() * 430);
        newObstaculo_1.tag = 'superior';

        var newObstaculo_2 = new Sprite();
        newObstaculo_2.y = newObstaculo_1.height + 170;
        newObstaculo_2.height = 600 - newObstaculo_2.y;
        newObstaculo_2.tag = 'inferior';

        this.obstaculo.push(newObstaculo_1);
        this.obstaculo.push(newObstaculo_2);
        this.tempo_corrido_depois_que_ultimo_ojeto_foi_criado = 0;
    }

    contexto.fillStyle = "#1C1C1C";

    for(var i = 0; i < this.obstaculo.length; i++){
        var obstaculo = this.obstaculo[i];
        if(obstaculo.colidiu(player)){
            return false;
        }
        obstaculo.mover(dt);
        obstaculo.desenha(contexto);
    }

    this.check();
    return true;
}

Level.prototype.check = function(){
    for(var i = 0; i < this.obstaculo.length; i++){
        var obstaculo = this.obstaculo[i]
        var posicao_x = obstaculo.x + obstaculo.width;
        if(posicao_x < 0){
            this.obstaculo.splice(i,1);
        }
    }
}