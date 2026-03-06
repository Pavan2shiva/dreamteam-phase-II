# Task-1 writeup
## Over the wire - bandit 

## Introduction
In this task, i learned basic Terminal commands, practised essential commands ,explored file systems, analyzed encoded data, managed permissions, debugging strategies.

## key objectives learned
* basic terminal commands
* Understand file permissions and hidden files
* Work with encodings and compressed files

## Level-wise writeup
## Level-00 
```
ssh bandit0@bandit.labs.overthewire.org -p 2220
password: bandit0
```
This level , I learned how to login to the bandit server using ssh protocol

## Level-00 -> 01
```Password: ZjLjTmM6FvvyRnrb2rfNWOZ0Ta6ip5If```
```
ls
cat readme
```
This level, I learned about listing of files and using cat checking info in it

## Level-01 -> 02
``` Password: 263JGJPfgU6LtdEvgfWU1XP5yac29mFx```
```
ls
cat ./-
```
This level, I learned how to read files with special characters in their names and understood the importance of using the correct path format like ./- to access such files.

## Level - 02 -> 03
'''Password: MNk8KNH3Usiio41PRUEoDFPqfxLP1Smx```
```
ls  
cat spaces\ in\ this\ filename
```
This level, I learned how to open files with spaces in their names using escape characters.

## Level -03 ->04
'''Password: 2WmrDFRmJIqЗIPxneAaMGhap0pFhF3NJ```
```
ls  
cd inhere  
ls -a  
cat ...Hiding-From-You
```
This level, I learned how to find hidden files using ls -a and understood that files starting with a dot (.) are hidden files.

## Level -04->05
```Password: 40QYVPkxZ00E005pTW81FB8j81xXGUQw```
```
ls  
file inhere/*  
cat inhere/-file07
```
This level, I learned how to identify file types using the file command and locate the readable file among multiple files to retrieve the password.

## Level -05 -> 06
```Password:HWasnPhtq9AVKe0dmk45nxy20cvUa6EG```
```
ls  
cd inhere  
find . -maxdepth 2 -type f -size 1033c  
cat ./maybehere07/.file2
```
This level, I learned how to search for files using the find command with specific conditions like size, type, and directory depth to locate the correct file.

## Level -06->07
```Password: morbNTDKSW6jI1Uc0ymOdMaLn01FVAai```
```
find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null  
cat /var/lib/dpkg/info/bandit7.password
```
This level, I learned how to search the entire system using the find command with filters like user, group, and file size, and how to ignore permission errors using 2>/dev/null.

## Level -07->08
```Password: dfwvzFQi4mU0wfNbF0e9RoWskMLg7eEc```
```
grep millionth data.txt
```
This level, I learned how to search for a specific word inside a file using the grep command.

## Level -08->09
```Password: 4CKMh1JI91bUIZZPXDqGana14xvAg0JM```
```
ls
sort data.txt | uniq -u
```
This level, I learned how to find a unique line in a file. I used sort to arrange the lines and uniq -u to display only the line that appears once, which revealed the password.

## Level -09 ->10

```Password: FGUW5ilLVjrxX9kMYMmlN4MgbpfMiqey```
```
strings data.txt | grep "="
```
This level, I learned how to extract readable text from a binary file using the strings command. Then I used grep "=" to filter and find the line for the password.

## Level -10->11
```Password: dtR173fZKbØRRsDFSGsg2RWnpNVj3qRr```
```
ls
base64 -d data.txt
```
This level, I learned how to decode encoded text using the base64 command. 

## Level -11->12
```Password:7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4```
```
cat data.txt  
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```
This level, I learned how to decode ROT13 encoded text using the tr command. I translated the characters using tr to get the actual password.

## Level -12->13
```Password:F05dwFsc0cbaIiH0h8J2eUks2vdTDwAn```
```
cat data.txt  
xxd -r data.txt > data.bin  
file data.bin  
mv data.bin data.gz  
gunzip data.gz  
tar -xf data  
file data5.bin  
mv data5.bin data5.gz  
gunzip data5.gz  
tar -xf data5  
cat data8
```
This level, I learned how to extract hidden data from multiple compressed and encoded formats. I first converted the hex dump back to binary using xxd -r, then repeatedly checked the file type and extracted it using tools like gunzip and tar until I finally reached the file containing the password.

## Level -13->14
```Password: MU4VWeTyJk8R0of1qqmcBPaLh71DCPvS```
```
ssh -i sshkey.private bandit14@localhost
ls
cat /etc/bandit_pass/bandit14  
```
This level, I learned how to read a password file stored in the system directory. I used the cat command to display the contents of /etc/bandit_pass/bandit14 and obtain the password for the next level.

## Level -14->15
```Password: 8xCinmgoKbGLhHFAZ1GE5Tmu4M2tKJQo```
```
cat /etc/bandit_pass/bandit14 | nc localhost 30000
```
This level, I learned how to send input to a network service using netcat (nc). I piped the current level password into nc running on localhost port 30000, which verified it and returned the password for the next level.

## Level -15->16
```Password:kSkvUpMQ71BYyCM4GBPvCvT1BfWRyØDx```
```
cat /etc/bandit_pass/bandit16  
ncat --ssl localhost 30001
```
This level, I learned how to connect to a secure service using SSL with ncat. I connected to localhost on port 30001 using the --ssl option and provided the current password to receive the next level password.

## Level -16->17
```Password:x2gLTTjFwMOhQ8oWNbMN362QKxfRqG10```
```
nmap -p 31000-32000 localhost
openssl s_client -quiet -connect localhost:31790
 ```
This level, I scanned ports 31000–32000 using nmap to find an open port. Then I connected to the open SSL service using openssl s_client, which returned an RSA private key used to log into the next level.

## Level -17->18
```Password:cGWpMaKXVwDUNgPAVJbWYuGHVn9z13j8```
```
chmod 600 bandit7.txt  
ssh -i bandit7.txt bandit17@bandit.labs.overthewire.org -p 2220  
diff passwords.old passwords.new  
```
This level, I used the private key to log in via SSH. First, I changed file permissions using chmod 600 so the key was secure. Then I logged in and used diff to compare the files and obtain the next level password.

## Level -18->19
```Password:0qXahG8Zj0VMN9Ghs7i0WsCfZyXOUbYO```
```
ssh bandit18@bandit.labs.overthewire.org -p 2220
cat readme
```
This level, the shell logs out immediately after login. So I used SSH with a command (cat readme) to directly read the file and obtain the password for the next level.

## Level -19->20
```Password:ЕеoULМCra2qØdSkYj561DХ7s1СpBu0Bt```
```
ls  
cat /etc/bandit_pass/bandit20  
cat /etc/bandit_pass/bandit20 | nc -l 1234 &  
suconnect 1234
 ```
This level, I first viewed the password file for bandit20. Then I opened a local listening port using netcat (nc). After that, I used the suconnect program to connect to my local port and send the password. Since the password matched, the program returned the password for the next level.






