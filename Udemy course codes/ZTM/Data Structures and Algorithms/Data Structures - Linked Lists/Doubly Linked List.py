class DoublyLinkedlist:
    def __str__(self):
        return str(self.__dict__)

    def __init__(self, value):
        self.head = {
            'value': value,
            'next': None,
            'prev': None
        }
        self.tail = self.head
        self.length = 1

    def append(self, value):
        newNode = {
            'value': value,
            'next': None,
            'prev': None
        }
        newNode['prev'] = self.tail
        self.tail['next'] = newNode
        self.tail = newNode
        self.length += 1
        return self

    def prepend(self, value):
        newNode = {
            'value': value,
            'next': None,
            'prev': None
        }
        newNode['next'] = self.head
        self.head['prev'] = newNode
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
            'next': None,
            'prev': None
        }
        leader = self.traverseToIndex(index-1)
        next_node = leader['next']
        leader['next'] = newNode
        newNode['prev'] = leader
        newNode['next'] = next_node
        next_node['prev'] = newNode
        self.length += 1
        return self.printList()

    def remove(self, index):
        # Check for proper parameters;
        leader = self.traverseToIndex(index-1)
        unwantedNode = leader['next']
        nextNode = unwantedNode['next']
        leader['next'] = nextNode
        nextNode['prev'] = leader
        self.length -= 1
        return self.printList()


myDlist = DoublyLinkedlist(10)
myDlist.append(30)
myDlist.append(40)
myDlist.append(50)
print(myDlist.printList())
myDlist.prepend(1)
print(myDlist.printList())
myDlist.insert(4, 44)
print(myDlist.printList())
myDlist.remove(2)
print(myDlist.printList())
