/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        ellipse(40, 40, 40, 40);

        draw = function() {
            drawBear();
        };

        drawBear = function(x, y) {
            ellipse(x, y, 40, 40);
            fill(random(255), random(255), random(255));
            ellipse(x, y, 35, 35);
            ellipse(x - 10, y - 20, 30, 30);
            ellipse(x + 10, y - 20, 30, 30);
            ellipse(x - 5, y, 5, 5);
            ellipse(x + 5, y, 5, 5);
            line(x - 4, y + 6, x + 4, y + 6);

            fill(random(255), random(255), random(255));
            ellipse(x - 10, y + 20, 30, 30);
            ellipse(x, y, 35, 35);
            ellipse(x - 10, y - 20, 15, 15);
            ellipse(x + 10, y - 20, 15, 15);
            ellipse(x - 5, y, 5, 5);
            ellipse(x + 5, y, 5, 5);
            line(x - 4, y + 6, x + 4, y + 6);

        };

        mouseClicked = function() {
            drawBear(mouseX, mouseY);
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
