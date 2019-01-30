/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        background(160, 82, 45);

        //Forms the threeleaf clover
        function threeLeaf() {
            fill(2)
            ellipse(150, 120, 100, 100);
            ellipse(97, 200, 100, 100);
            ellipse(197, 200, 100, 100);
            triangle(120, 335, 175, 335, 147, 200);
        }

        //Forms the fourleaf clover
        function fourLeaf() {
            fill(0, 128, 0);
            ellipse(200, 101, 100, 100);
            ellipse(97, 200, 100, 100);
            ellipse(197, 200, 100, 100);
            ellipse(200, 101, 100, 100);
            ellipse(100, 101, 100, 100);
            triangle(120, 335, 175, 335, 147, 120);
        }

        //Forms the grass background color
        draw = function() {
            //
            background(160, 82, 45);

            //Forms the grass loop
            for (var i = 0; i < width; i += 30) {
                for (var j = 0; j < height; j += 30) {
                    var size = random(10, 20)
                    fill(0, 128, 0)
                    triangle(i, j, i + 20, j, i + size / 2, j - size)
                }
            }

            //Has the fourleaf clover pop up when your cursor is at the top of the preview 
            if (mouseY < 200) {

                fourLeaf();
            }
            //Has the threeleaf clover pop up when your cursor is at the  of the preview
            if (mouseY > 200) {

                threeLeaf();
            }




        };


        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
