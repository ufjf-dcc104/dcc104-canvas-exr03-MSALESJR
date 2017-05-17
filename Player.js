/**
 * Criado por Marcus em 10/05/2017.
 */
function Player()
{
    this.x = null;
    this.y = null;
    this.width  = null;
    this.height = null;
    this.vy = 0;
    this.gravidade = 10;
    this.image = null;
    this.numero_de_frames = 4;
    this.quadro = 0;
    this.tempo_ente_atualizacao_frame = 0.090;
    this.tempo_corrido = 0;
}


Player.prototype.update = function (dt) {
    this.tempo_corrido += dt;
    if(this.tempo_corrido >= this.tempo_ente_atualizacao_frame){
        if(this.quadro == this.numero_de_frames - 1){
            this.quadro = 0;
        }else{
            this.quadro++;
        }
        this.tempo_corrido = 0;
    }
}

Player.prototype.desenha = function (contexto) {
    contexto.save()
    contexto.translate(0,0);
    contexto.rotate(Math.PI/5);
    //contexto.fillRect(this.x,this.y,this.width,this.height);
    contexto.drawImage(
        this.image,
        this.quadro * (this.image.width / this.numero_de_frames),
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height);
    contexto.restore();
}

Player.prototype.mover = function (dt) {
    this.y = this.y + this.vy * this.gravidade * dt;
};