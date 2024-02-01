export default class Huffman {
    constructor (tree) {
        this.tree = tree
    }

    decode(codedMessage) {
        const splitCode = codedMessage.split('')
        let currentNode = this.tree.root
        const decodedMessage = []
        let currentValue = ''

        while(splitCode.length) {
            currentValue = splitCode.shift()

            currentValue == '0' ? currentNode = currentNode.left : currentNode = currentNode.right
          

            if (!currentNode.value.startsWith('*')) {
                decodedMessage.push(currentNode.value)
                currentNode = this.tree.root
            }
        }

        return decodedMessage.join('')
    }


    
}