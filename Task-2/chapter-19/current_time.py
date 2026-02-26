#importing time
import time

#using for loop and runnning the time upto 10 seconds 
for i in range(10):
    b = time.ctime()
    print("Current time: ",b)
    time.sleep(1)
