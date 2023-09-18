class Array:
    def __init__(self):
        self.length = 0
        self.data = {}

    # __str__ method is useful for a string representation of the object
    def __str__(self):
        return str(self.__dict__)

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1

    def pop(self):
        lastitem = self.data[self.length-1]
        del self.data[self.length-1]
        self.length -= 1
        return lastitem

    def delete(self, index):
        deleteditem = self.data[index]
        for i in range(index, self.length-1):
            self.data[i] = self.data[i+1]

        del self.data[self.length-1]
        self.length -= 1
        return deleteditem

    def insert(self, index, value):
        for i in range(self.length, index, -1):
            self.data[i] = self.data[i-1]

        self.data[index] = value
        self.length += 1


arr = Array()
arr.push('a')
arr.push('b')
arr.push('c')
arr.push('d')
arr.push('e')
print(arr)
print(arr.get(0))
print(arr.pop())
print(arr.pop())
print(arr.delete(0))
print(arr)
arr.insert(2, 'hmmm')
print(arr)
arr.insert(4, 'yoyo')
print(arr)
