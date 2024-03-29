
import BinaryTree from "./src/binary-tree.js"
import Huffman from "./src/huffman.js"
import drawTree from './src/draw-tree.js'

let tree = new BinaryTree()

tree.insert('*1')
tree.insert('*2')
tree.insert('*3')
tree.insert('*4')
tree.insert('*5')
tree.insert('*16')
tree.insert('*17')
tree.insert('*6')
tree.insert('*7')
tree.insert('*10')
tree.insert('*11')
tree.insert('*18')
tree.insert('*19')
tree.insert('*24')
tree.insert('*25')
tree.insert('r')
tree.insert('o')
tree.insert('*8')
tree.insert('*9')
tree.insert('*12')
tree.insert('*13')
tree.insert('*14')
tree.insert('*15')
tree.insert('*20')
tree.insert('*21')
tree.insert('*22')
tree.insert('*23')
tree.insert('e')
tree.insert('*26')
tree.insert('1')
tree.insert('*27')
tree.insert('0','*8')
tree.insert('3','*8')
tree.insert('6','*9')
tree.insert('9','*9')
tree.insert('i','*12')
tree.insert('y','*12')
tree.insert('u','*13')
tree.insert('l','*13')
tree.insert('.','*14')
tree.insert('c','*14')
tree.insert('m','*15')
tree.insert("\\",'*15')
tree.insert('M','*20')
tree.insert('S','*20')
tree.insert('a','*21')
tree.insert('j','*21')
tree.insert('E','*22')
tree.insert('z','*22')
tree.insert('k','*23')
tree.insert('R','*23')
tree.insert('h','*26')
tree.insert('7','*26')
tree.insert('t','*27')
tree.insert('n','*27')


let huffman = new Huffman(tree)
const codedMessage = '11110010001111101001010100000010110110001101000101110011111000011001111110001100101001110100101011100101101011100001100111100001110101110111011100011100100001011101111011001101110'

const decodedMessage = huffman.decode(codedMessage)

//drawing
drawTree(tree, decodedMessage)