# Task-1 Writeup  
## Git Exercises 

## Introduction
In this task, I learned the basic git work flow, by these levels i have learned how to handle the git track changes, managing commits, working with branches and learned real-world workflow of git.

## Exercise-wise writeup

## Exercise 00 — Master
```
git start
git verify
```
This exercise, I learn how to start the git exercises and verify the solutions

## Exercise 01 - Commit one file
```
git add A.txt
git commit -m"A.txt"
```
I learned how to commit a specific file 

## Exercise 02 - Commit one file of two currently staged
```
git reset
git add B.txt
git commit -m"Commited B.txt"
```
This exercise, I learned how to manage the staging area and commit the file

## Exercise 03 - Ignore unwanted files
```
nano .gitignore
git add .gitignore
git commit -m"ignore them"
```
This exercise , I used nano to store unnecessary specfic files with exe, o, jar,libraries

## Exercise 04 - Chase branch that escaped
```
git merge escaped
```
This exercise , I learned how to move a branch to the latest commit by merging another branch

## Exercise 05 - Resolve a merge conflict
```
git merge another-piece-of-work
nano equation.txt
git add equation.txt
git commit -m"equation.txt"
```
This exercise, I resolved the conflict manually by editing the file and commited txt file

## Exercise 06 - Saving your work
```
git stash
nano bug.txt
git add bug.txt
git commit -m"bug.txt"
git stash pop
nano bug.txt(added finallt finshed at end)
git add bug.txt program.txt
git commit -m"finally finished"
```
This exercise, I learned how to save our temporarily using stash, fix another issue and then restore my previous work to continue and complete it.

## Exercise 07 - Change branch history
```
git rebase hot-bugfix
```

This exercise, I learned how to rewrite branch history using rebase so that my work continues after applying the bug fix.

## Exercise 08 - Remove ignored file
```
git rm ignored.txt
git commit -m"removed all ignored files"
```
This exercise, I learned how to remove the ignored files

##  Exercise 09 - Change a letter case in the filename of an already tracked file
```
git mv File.txt file.txt
git commit -m"lower case file.txt"
```
This exercise, I learned how to rename the files using the mv 

## Exercise 10 - Fix typographic mistake in the last commit
```
cat file.txt
nano file.txt
git add file.txt
git commit --amend
```

This exercise, I learned how to correct mistakes in the last commit using amend by fixing the file and updating the commit.

## Exercise 11 -  Forge the commit's date
```
git commit --amend --no-edit --date="1987-08-03"
```

This exercise, I learned how to change the date 

## Excercise 12 - Fix typographic mistake in old commit
```
git rebase -i HEAD~2
git add file.txt
git rebase --continue
```

This exercise ,I learned how to fix mistakes in older commits using interactive rebase and amend.

## Exercise 13 - Find a commit that has been lost
```
git reflog
git reset --hard a24efa1
```
This exercise, I learned how to recover lost commits using reflog and restore them using reset.

## Exercise 14 - Split the last commit
```
git reset Head~1
git add first.txt
git commit -m"first.txt"
git add second.txt
git commit -m"second.txt"
```
This exercise, I learned how to split one commit into multiple commits using reset and recommitting files separately.

## Exercise 15 - Too many commits
```
git rebase --interactive
```
This exercise, I learned how to combine multiple commits into one using interactive rebase and squash.

## Exercise 16 -  Make the file executable by default
```
git update-index --chmod=+x script.sh
```
This exercise, I learned how to change file permissions and track executable files in Git.

## Exercise 17 - Commit part of work
```
git add -p file.txt
git commit -m"Task-1"
git add file.txt
git commit -m"Task-2"
```
This exercise, I learned how to stage and commit only selected parts.

## Exercise 18 - Pick your features
```
git cherry-pick feature-a
git cherry-pick feature-b
git cherry-pick feature-c
git add -A
git cherry-pick --continue
```
This exercise, I learned how to apply specific commits from another branch using cherry-pick.

## Excercise 19 - Rebase complex
```
git rebase issue-555 --onto your-master
```
This exercise, I learned how to rebase a branch onto another branch and handle conflicts during the process.

## Excercise 20 - Change order of commits
```
git rebase -i Head~2
```
This exercise, I learned how to reorder commits using interactive rebase.

## Exercise 21 - Find commits that introduced swearwords
```
git log -Sshit
git rebase -i
git rebase --continue
```
This exercise, I learned how to locate commits introducing specific words using `git log -S` and rewrite history with interactive rebase.

## Exercise 22 - Find commit that has introduced bug
```
git bisect start
git bisect bad HEAD
git bisect good 1.0
git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass"
```
This exercise, I learned how to use `git bisect` to efficiently locate the commit that introduced a bug by performing a binary search through commit history.
