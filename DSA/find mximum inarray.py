def find_maximum(arr,length):
    max=arr[0]
    for i in range(len(arr)):
        if arr[i]>max:
            max=arr[i]
    return max
def main():
    n=int(input())
    arr=[]
    for i in range(n):
        arr.append(input())
        print(find_maximum(arr,n))
main()                    