class HashTable:
    def __init__(self, size):
        self.size = size
        self.data = list([] for _ in range(0, size))

    def _hash(self, key):
        hash = 0
        for i in range(0, len(key)):
            hash = (hash + ord(key[i]) * i) % self.size
        return hash

    def set(self, key, value):
        address = self._hash(key)
        self.data[address].append([key, value])
        return self.data

    def get(self, key):
        address = self._hash(key)
        currentBucket = self.data[address]
        if currentBucket:
            for i in range(0, len(currentBucket)):
                if (currentBucket[i][0] == key):
                    return currentBucket[i][1]

        return None

    # keys can be O(n)

    def keys(self):
        keysArray = []
        for i in range(0, len(self.data)):
            if (self.data[i]):
                keysArray.append(self.data[i][0][0])

        return keysArray


myhashtable = HashTable(50)
myhashtable.set('apples', 1000)
myhashtable.set('apples', 1000)
myhashtable.set('mango', 4000)
print(myhashtable.set('banana', 5000))
print(myhashtable.get('apples'))
print(myhashtable.get('mango'))
print(myhashtable.get('banana'))
print(myhashtable.get('Hmmm'))
print(myhashtable.keys())
