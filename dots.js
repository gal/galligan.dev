const body = document.querySelector("body");
const canvas = document.querySelector("#dots");
const coverImg = document.querySelector(".cover-overlay");
const relativeX = coverImg.getBoundingClientRect().x;
const relativeY = coverImg.getBoundingClientRect().y;

canvas.width = visualViewport.width;

canvas.height = 0;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
dotsize = window.visualViewport.width > 600 ? 3 : 1;

var mousePos = { x: 0, y: 0 };
var hoveringCover = false;
var mouseDown = false;

window.addEventListener("mouseup", (e) => {
  console.log("check")
  dots.forEach((dot) => {
    dot.active = false;
  });

  mouseDown = false;
});

window.addEventListener("mousedown", (_e) => {
  mouseDown = true;
})

// // when mouse is clicked, move each dot in a radius towards cursor
// window.addEventListener(
//   "click",
//   function (_e) {
//     dots.forEach((dot) => {
//       dot.active = false;
//       // if dot is close to mouse position
//       if (Math.hypot(mousePos.x - dot.x, mousePos.y - dot.y) < 100) {
//         console.log("bruh")
//         dot.active = true;
//       }
//     });
//   },
//   false
// );

// window.addEventListener("mouseup", (_e) => {
//     console.log("bruhmoment")
// })

window.addEventListener("mousemove", (event) => {
  mousePos = { x: event.offsetX, y: event.offsetY };
  if (hoveringCover) {
    mousePos.x += relativeX;
    mousePos.y += relativeY;
  }
});

// if cursor leaves viewport, set mousePos to way outside of canvas
body.addEventListener("mouseleave", (_event) => {
  mousePos = { x: -9999, y: -9999 };
});

// when mouse enters coverImg element, the mousePos becomes relative to it,
// so we must set a flag to indicate we need to fix the mousePos to be absolute
coverImg.addEventListener("mouseenter", (_event) => {
  hoveringCover = true;
});

// when mouse leaves, remove the flag
coverImg.addEventListener("mouseleave", (_event) => {
  hoveringCover = false;
});

class Dot {
  constructor(x, y, vx, vy) {
    // position
    this.x = x;
    this.y = y;

    // velocity ( speed )
    this.vx = vx;
    this.vy = vy;

    this.active = false;
  }

  // draw a small rectangle, from the top left corner, to the right
  // 'dotsize' pixels, and down 'dotsize' pixels
  draw(ctx) {
    ctx.fillStyle = "#fff";
    // creates a rectangle 'frame'
    ctx.rect(this.x, this.y, dotsize, dotsize);
    // fills the rectangle 'frame'
    ctx.fill();
  }

  // update the position of the dot, based on its velocity
  update(ctx) {
    // increment position by velocity for every frame
    this.x += this.vx;
    this.y += this.vy;

    if (this.active) {
      // move toward mouse position
      // const factor =
      //   Math.hypot(mousePos.x - this.x, mousePos.y - this.y) / (dotsize * 250);

      // vx and vy should be ease
      // const velx = 10 * Math.pow(2, -10 * this.x - mousePos.x);
      // const vely = 10 * Math.pow(2, -10 * this.y - mousePos.y);
      const velx = (mousePos.x - this.x) / 20;
      const vely = (mousePos.y - this.y) / 20;
      this.x += velx;
      this.y += vely;
      // this.x += (mousePos.x - this.x) * 0.1 * factor;
      // this.y += (mousePos.y - this.y) * 0.1 * factor;
      ctx.fillStyle = "red";
    }

    // if dot will go outside of canvas, reverse its velocity in that
    // direction. i.e. if going outside canvas to the right, reverse X
    // velocity, to become negative, which will cause it to move left on
    // next frame
    if (this.x < 0 || this.x > ctx.canvas.width) {
      this.vx *= -1;
    }

    if (this.y < 0 || this.y > ctx.canvas.height) {
      this.vy *= -1;
    }
  }

  // check if dot is close to any other dot, and draw a line between them
  connectDots(ctx, dots) {
    var inCanvas = false;
    // if mouse coords are in canvas
    if (
      mousePos.x > 0 &&
      mousePos.x < ctx.canvas.width &&
      mousePos.y > 0 &&
      mousePos.y < ctx.canvas.height
    ) {
      inCanvas = true;
    }

    // check distance between each dot, and every other dot
    // ('this' dot is being compared to every other dot)
    dots.forEach((dot) => {
      var mouseDist = 999;
      const dx = this.x - dot.x;
      const dy = this.y - dot.y;
      // cartesian distance between two points
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (inCanvas) {
        // get cartesian distance between mouse and dot
        mouseDist = Math.sqrt(
          (this.x - mousePos.x) * (this.x - mousePos.x) +
            (this.y - mousePos.y) * (this.y - mousePos.y)
        );
      }

      // if distance is less than a constant times dotsize (relative to screen size)
      if (distance < dotsize * 45) {
        if (mouseDist < dotsize * 100) {
          ctx.strokeStyle = "#fff";
          ctx.strokeWidth = 3;
        } else {
          ctx.strokeStyle = "#fff2";
        }

        ctx.beginPath();
        const offset = dotsize / 2;
        ctx.moveTo(this.x + offset, this.y + offset);
        ctx.lineTo(dot.x + offset, dot.y + offset);
        ctx.stroke();
      }
    });
  }
}

// generate a list of randomized dots
const randDots = (ctx, count) => {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    const vx = Math.random() * 2 - 1;
    const vy = Math.random() * 2 - 1;

    dots.push(new Dot(x, y, vx, vy));
  }
  return dots;
};

// generate a list of dots
const dots = randDots(ctx, 160);

// start animation
const animate = () => {
  // remove existing dots and lines
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // if mouse is clicked
  if (mouseDown) {
    dots.forEach((dot) => {
      const dist = Math.hypot(mousePos.x - dot.x, mousePos.y - dot.y)
      if (dist > 100 && dist < 120) {
        dot.active = true;
      }
    });
  }

  // for each dot, update its position, draw the dot and connect lines with
  // other dots on every frame (iteration of the 'animate' function)
  dots.forEach((dot) => {
    dot.update(ctx);
    dot.draw(ctx);
    dot.connectDots(ctx, dots);
  });

  // request next frame (will call animate() again)
  window.requestAnimationFrame(animate);
};

// let browser decide to "render" (call animate function) at whatever framerate
// it wants, with respect to resource usage, and what the machine can handle
window.requestAnimationFrame(animate);
