class Linkedlist:
    def __str__(self):
        return str(self.__dict__)

    def __init__(self, value):
        self.head = {
            'value': value,
            'next': None
        }
        self.tail = self.head
        self.length = 1

    def append(self, value):
        newNode = {
            'value': value,
            'next': None
        }
        self.tail['next'] = newNode
        self.tail = newNode
        self.length += 1
        return self

    def prepend(self, value):
        newNode = {
            'value': value,
            'next': None
        }
        newNode['next'] = self.head
        self.head = newNode
        self.length += 1
        return self

    def printList(self):
        arr = []
        currentNode = self.head
        while(currentNode != None):
            arr.append(currentNode['value'])
            currentNode = currentNode['next']

        return arr

    def traverseToIndex(self, index):
        counter = 0
        currentNode = self.head
        while(counter != index):
            currentNode = currentNode['next']
            counter += 1
        return currentNode

    def insert(self, index, value):
        # Check for proper parameters;
        if (index >= self.length):
            return self.append(value)
        newNode = {
            'value': value,
            'next': None
        }
        leader = self.traverseToIndex(index-1)
        next_node = leader['next']
        leader['next'] = newNode
        newNode['next'] = next_node
        self.length += 1
        return self.printList()

    def remove(self, index):
        # Check for proper parameters;
        leader = self.traverseToIndex(index-1)
        unwantedNode = leader['next']
        leader['next'] = unwantedNode['next']
        self.length -= 1
        return self.printList()


myLinkedlist = Linkedlist(5)
myLinkedlist.append(10)
myLinkedlist.append(20)
myLinkedlist.append(30)
myLinkedlist.prepend(1)
print(myLinkedlist.printList())
myLinkedlist.insert(3, 33)
myLinkedlist.insert(55, 55)
print(myLinkedlist.printList())
myLinkedlist.remove(4)
print(myLinkedlist.printList())
print(myLinkedlist)
