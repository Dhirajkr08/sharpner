def sort_array(arr,length):
    for i in range(len(arr)):
        temp=arr[i]
        j=i-1
        while j>=0 and temp<arr[j]:
            arr[j+1]=arr[j]
            j=j-1
        arr[j+1]=temp
    return arr
def main():
    n=int(input())
    arr=[]
    for i in range(0,n):
        arr.append(int(input())) 
        output=sort_array(arr,n)
    for i in range(0,n):
        print(output[i])
main()                          