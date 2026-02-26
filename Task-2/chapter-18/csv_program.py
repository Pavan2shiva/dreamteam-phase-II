import csv

# Writing into CSV 
file = open("data.csv", "w", newline="")
writer = csv.writer(file)

writer.writerow(["Name", "Age"])
writer.writerow(["Pavan", 21])
writer.writerow(["Rahul", 22])

file.close()

print("CSV file created!")

#Reading CSV 
file = open("data.csv", "r")
reader = csv.reader(file)

print("\nReading CSV file:")
for row in reader:
    print(row)

file.close()
