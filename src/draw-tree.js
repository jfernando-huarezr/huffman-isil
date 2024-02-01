import p from 'p5-sketch'

export default function drawTree(tree, message=null) {

    p.setup = () => {
        p.createCanvas(1000, 600)
        p.background('white');
    }
    
    
    function drawNode(node, x, y, level) {
        if (node == null) {
          return;
        }
    
        p.ellipse(x, y, 20, 20);
    
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(10)
        p.text(node.value, x, y);

        let horizontalSpacing = p.width / Math.pow(2, level + 1); 
        let newXLeft = x - horizontalSpacing/2;
        let newXRight = x + horizontalSpacing/2;
        let newY = y + 50;

        drawNode(node.left, newXLeft, newY, level + 1);
        drawNode(node.right, newXRight, newY, level + 1);
    }
    
    function drawLines(node, x, y, level, parentX=null, parentY=null) {
        if (node == null) {
            return;
        }
          
        if (parentX && parentY) {
            p.line(x, y, parentX, parentY);
        }

        let horizontalSpacing = p.width / Math.pow(2, level + 1);
        let newXLeft = x - horizontalSpacing/2;
        let newXRight = x + horizontalSpacing/2;
        let newY = y + 50;

        drawLines(node.left, newXLeft, newY, level+1, x, y);
        drawLines(node.right, newXRight, newY, level+1, x, y);
    }
    
    
    p.draw = () => {
        drawLines(tree.root, p.width/2, 50, 0);
        drawNode(tree.root, p.width/2, 50, 0);

        p.textSize(20)
        p.text(message, p.width/2, 10);
    }
}
