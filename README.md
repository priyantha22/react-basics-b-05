# section 01

## This is for learning Version Controlling

## step 01 : create a repository github.com

## step 02 : create a folder in local machine

## step 03 : open the project folder in vscode

## step 04 : open the terminal of vscode

## step 05 : check the git version
- use one of(bash/cmd/git bash)
...bash
git -v
...

## step 06 : Initialize a git repo using

...bash
git init
...

## step 07 : check the git status

...bash
git status
...

## step 08 : Add files to the git using

# Add all files in the current folder
...bash
git add .
...

# Add all files regardless of the folder  we are in

...bash
git add -A

## step 09 : commit the changes with a meaningful commit message

## Always should be meaningful, concise and relevant

...bash
git commit -m "Initial project commit"

# ex: This commit will: "update script file" 

# ex: This commit will: "Refactor current logic" 
...

## step 10 : check if there's any existing remote urls

...bash
git remote -v
...

## step 11 :check if there's any existing remote urls

...bash
git remote add origin git@github.com:<remote-url>

# ex: git remote add origin git@github.com:/priyantha22/react-basics-b-05
...

## step 12 : check if the remote url configured without a issue

...bash
git remote -v
...

## step 13 : Make sure the default branch is main branch

...bash
git branch -M main
...

## step 14 : push the local commits to the remote/cloud branch

...bash
git push -U origin main
...

## step 15 : check if the changes are there is the remote

...........

# section 02

## step 16 : Do a file change

...bash
git push -U origin main
...

## 17 : check file change in vscode

## 18 : check file change in the terminal using

...bash
git status
...



