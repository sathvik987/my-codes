# def mergesortedarr(a,b):
#  x=a+b
#  x.sort()
#  return x

# a=[1,2,3,4]
# b=[3,7,9,12]
# qw=mergesortedarr(a,b)
# print(qw)


""" #my sol
def mergeSortedArrays(arr1, arr2):
    return sorted(arr1 + arr2)


print(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))

 """
# In interview we must solve only like this


def mergesortedarr(a, b):
    if len(a) == 0 or len(b) == 0:
        return a+b
    mylist = []
    i = 0
    j = 0
    while i < len(a) and j < len(b):

        if a[i] <= b[j]:
            mylist.append(a[i])
            i += 1

        else:
            mylist.append(b[j])
            j += 1

    # because 1 item will still not be appended from a or b
    return mylist+a[i:]+b[j:]


a = [2, 3, 4, 5, 6, 9, 11, 76]
b = [1, 3, 4, 6, 20]
x = mergesortedarr(a, b)
print(x)
