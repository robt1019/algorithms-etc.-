count = 0

def hanoi(n):
  hanoi_recursive(n, 'a', 'b', 'c')

def hanoi_recursive(disk, source, dest, spare):

  global count
  count = count + 1 

  if disk == 1:
    print('Move plate from ' + source + ' to ' + dest)
  else:
    hanoi_recursive(disk-1, source, spare, dest)
    print('Move plate from ' + source + ' to ' + dest)
    hanoi_recursive(disk-1, spare, dest, source)

# hanoi(1)
# hanoi(2)
# hanoi(3)
# hanoi(4)
# hanoi(5)
hanoi(6)
print(count)
         
