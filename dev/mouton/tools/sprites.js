const evenement = new Event('evenement');
// ===================================================================================
// canvasImage : image sur un canvas
// nameImg : URL de l'image
// (posX,posY) : position du coin supérieur gauche de l'image dans le canvas
// ctx : contexte graphique
function canvasImage(imgURL,posX,posY,ctx)
{
	var image = new Image();   // nouvelle image
	image.ready = false;      // false: pas encore chargée, true: chargée
	image.src = imgURL;
	image.posX = posX;
	image.posY = posY;
	image.ctx = ctx;
	return image;
}
// -----------------------------------------------------------------------------------
// Dessine l'image sur le canvas
function drawCanvasImage(image,posX,posY)
{
	if (image.ready)
	{
		if (posX) image.posX = posX;
		if (posY) image.posY = posY;
		image.ctx.drawImage(image,image.posX,image.posY);
	}
}
// ===================================================================================
// Constructeur for an animation object
// image: graphics source
// (x, y): position to draw the animation
// width, height: size of each tile
// nbXTiles : nombre de tiles horizontalement
// nbYTiles : nombre de tiles verticallement
// loop : animation en boucle (true) ou non (false)
function CanvasSprite(spriteImgURL, x, y, widthTile, heightTile, nbXTiles, nbYTiles,ctx, cv)
{
	this.image = canvasImage(spriteImgURL,x,y,ctx)
	this.widthTile = widthTile;
	this.heightTile = heightTile;
   	this.nbXTiles = nbXTiles;
   	this.nbYTiles = nbYTiles;
   	this.animations = {};
   	this.currentAnimation = [0];
   	this.currentTile = 0;
   	this.loop = false;
   	this.timeID = null;   	
}
// -----------------------------------------------------------------------------------
// Ajout d'une animation spécifique
// nameAnim : nom de l'animation
// tiles : tableau d'indices de tile
CanvasSprite.prototype.addAnimation = function(nameAnim, tiles)
{
	this.animations[nameAnim] = tiles;
}
// -----------------------------------------------------------------------------------
// Sélectionne une animation spécifique nameAnim
CanvasSprite.prototype.selectAnimation = function(nameAnim,loop)
{
	this.currentAnimation = this.animations[nameAnim];
	this.currentTile = 0;
	this.loop = loop;
}
// -----------------------------------------------------------------------------------
// Sélectionne la tile suivante et la dessine, si la tile existe (mode sans boucle)
// retourne false si la tile courrante est la dernière (mode sans boucle), true sinon
CanvasSprite.prototype.nextTile = function()
{
	if (this.loop){
		this.currentTile = (this.currentTile + 1) % this.currentAnimation.length;
		this.drawTile(this.currentAnimation[this.currentTile]);
		return true;
	}
	if(this.currentTile < this.currentAnimation.length -1){
		this.currentTile = this.currentTile +1;
		this.drawTile(this.currentAnimation[this.currentTile]);
		return(this.currentTile < this.currentAnimation.length);
	}
	cv.dispatchEvent(evenement);
	this.stopAnim();
	return false;	
}
// -----------------------------------------------------------------------------------
// Retourne la position de la tile dans le sprite selon x
CanvasSprite.prototype.tileX = function(tileIndex)
{
	return Math.floor(tileIndex % this.nbXTiles) * this.widthTile;
}
// -----------------------------------------------------------------------------------
// Retourne la position de la tile dans le sprite selon y
CanvasSprite.prototype.tileY = function(tileIndex)
{
	return Math.floor(tileIndex / this.nbXTiles) * this.heightTile;
}
// -----------------------------------------------------------------------------------
// Dessine une tile
CanvasSprite.prototype.drawTile = function(tileIndex)
{
	this.image.ctx.clearRect(this.image.posX, this.image.posY, this.widthTile, this.heightTile);
    this.image.ctx.drawImage(this.image, this.tileX(tileIndex), this.tileY(tileIndex), this.widthTile, this.heightTile, this.image.posX, this.image.posY, this.widthTile, this.heightTile);
};
// ----------------------------------------------------------------------------------
// Dessine une tile
CanvasSprite.prototype.simpleAnim = function(tps)
{
	if(this.image.ready){
		if(tps == undefined)tps = 100;
		this.drawTile(this.currentTile);
		this.timeID = setInterval(function(e){
			e.nextTile();
		},tps, this);
	}
}
// ----------------------------------------------------------------------------------
CanvasSprite.prototype.stopAnim = function()
{
	if(this.timeID)clearInterval(this.timeID);
}
// ----------------------------------------------------------------------------------
