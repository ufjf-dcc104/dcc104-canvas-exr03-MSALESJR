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
}

Sprite.prototype.desenha = function (contexto) {
    contexto.fillRect(this.x, this.y, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
    this.x = this.x - this.vx * dt;
};