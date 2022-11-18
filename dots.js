const canvas = document.querySelector('#dots');

canvas.width = canvas.offsetWidth

canvas.height = 0
canvas.height = visualViewport.height;

const dpi = window.devicePixelRatio;

const ctx = canvas.getContext('2d')
ctx.scale(dpi, dpi);

dotsize = window.visualViewport.width > 600 ? 5 : 3;

class Dot {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    draw(ctx) {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.rect(this.x, this.y, 4, 4);
        ctx.fill();
    }

    update(ctx) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > ctx.canvas.width) {
            this.vx *= -1;
        }

        if (this.y < 0 || this.y > ctx.canvas.height) {
            this.vy *= -1;
        }
    }

    connectDots(ctx, dots) {
        dots.forEach(dot => {
            const dx = this.x - dot.x;
            const dy = this.y - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = "rgb(255, 255, 255)";
                ctx.beginPath();
                ctx.moveTo(this.x + 2, this.y + 2);
                ctx.lineTo(dot.x + 2, dot.y + 2);
                ctx.stroke();
            }
        });
    }
}

const randDots = (ctx, count) => {
    const dots = [];
    
    for (let i = 0; i < count; i++) {
        const x = Math.random() * ctx.canvas.width;
        const y = Math.random() * ctx.canvas.height;
        const vx = Math.random() * 2 - 1;
        const vy = Math.random() * 2 - 1;

        dots.push(new Dot(x, y, vx, vy));
    }
    return dots
}

const dots = randDots(ctx, 80);

const animate = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    dots.forEach(dot => {
        dot.update(ctx);
        dot.draw(ctx);
        dot.connectDots(ctx, dots);
    })
    
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

