/**
 * Criado por Marcus em 10/05/2017.
 */
function Sprite()
{
    this.x = 800;
    this.y = 0;
    this.width  = 80;
    this.height = 300;
    this.vx     = 90;
    this.tag    = null;
}

Sprite.prototype.desenha = function (contexto) {
    contexto.fillRect(this.x, this.y, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
    this.x = this.x - this.vx * dt;
};

Sprite.prototype.colidiu = function (player) {
    //player ja passou do objeto
    if(this.x + this.width < player.x) return false;
    //player ta antes do objeto
    if(this.x > player.x + player.width) return false;
    //player esta abaixo do objeto superior
    if(this.tag === "superior" && this.y + this.height < player.y) return false;
    //player esta acima do onbjeto inferior
    if(this.tag === "inferior" && player.y + player.height < this.y) return false;
    //Ocorreu a colisao
    return true;
}