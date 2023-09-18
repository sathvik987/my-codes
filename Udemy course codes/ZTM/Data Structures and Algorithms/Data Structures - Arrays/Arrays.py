strings = ['a', 'b', 'c', 'd']
# 4*4 = 16 bytes of storage is used

print(strings[2])     # O(1)

# push
strings.append('e')      # O(1) #sometimes it can be O(n) in dynamic array
# pop
strings.pop()
strings.pop()            # O(1)

# addfirstelement
strings.insert(0, 'x')  # O(n)

# splice
strings.insert(2, 'alien')  # O(n)

# del
strings.remove('x')  # O(n)

print(strings)
