# my sol
def reverse(st):
    rev_str = ''
    for i in range(0, len(st)):
        rev_str = st[i]+rev_str
    return rev_str


x = reverse('Hello')
print(x)


def reverse2(stri):
    mylist = []
    for i in range(len(stri)-1, -1, -1):
        mylist.append(stri[i])
    return ''.join(mylist)


x = reverse2('I am Dom')
print(x)

# or just stri[::-1]
