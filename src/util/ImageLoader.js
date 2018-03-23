class ImageLoader {
    constructor(url, opt = {}) {
        this.isLoaded = false; 
        this.imageUrl = url; 
        this.opt = opt;
        this.initialize();
    }

    initialize () {
        this.canvas = this.createCanvas();
        this.context = this.canvas.getContext('2d');
    }

    createCanvas () {
        return document.createElement('canvas');
    }

    load (callback) {
        this.loadImage(callback);
    }

    loadImage (callback) {
        var ctx = this.context; 
        var img = new Image();
        img.onload = () => {
            var ratio = img.height / img.width;

            if (this.opt.canvasWidth && this.opt.canvasHeight) {
                this.canvas.width = this.opt.canvasWidth;
                this.canvas.height = this.opt.canvasHeight;
            } else {
                this.canvas.width = this.opt.maxWidth ? this.opt.maxWidth : img.width;
                this.canvas.height = this.canvas.width * ratio; 
            }

            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.canvas.width, this.canvas.height);
            this.isLoaded = true; 
            callback && callback();
        };

        this.getImageUrl(function (url) {
            img.src = url;
        });
    }

    getImageUrl (callback) {
        if (typeof this.imageUrl == 'string') {
            return callback(this.imageUrl);
        } else if (this.imageUrl instanceof Blob) {
            var reader = new FileReader();

            reader.onload = function (ev) {
                callback (ev.target.result);
            }

            reader.readAsDataURL(this.imageUrl);
        }
    }

    getRGBA (r, g, b, a) {
        return [r, g, b, a];
    }

    toArray(filter) {
        var imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

        var arr = new Uint8ClampedArray(imagedata.data);
        imagedata.data.set(filter(arr));

        this.context.putImageData(imagedata, 0, 0);

        return this.canvas.toDataURL('image/png');
    } 

    toRGB () {
        var imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

        var filter = this.getRGBA;
        var rgba = this.toArray() ;
        var results = [];
        for (var i = 0, len = rgba.length; i < len; i += 4){
            results[results.length] = [rgba[i + 0],rgba[i + 1],rgba[i + 2],rgba[i + 3]];
        }

        return results; 
    }

}

export default ImageLoader;