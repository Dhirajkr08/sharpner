def sort_array(arr,length):
    for i in range(len(arr)-1):
        for j in range(len(arr)-1-i):
            if arr[j+1]>arr[j]:
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
    return arr
def main():
    n=int(input())
    arr=[]
    for i in range(n):
        arr.append(int(input()))
        output=sort_array(arr,n)
    for i in range(0,n): 
        print(output[i])               