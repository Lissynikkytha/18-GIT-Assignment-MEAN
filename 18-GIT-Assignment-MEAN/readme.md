
C:\wamp64\www\new-angular-2>git clone https://github.com/Lissynikkytha/18-GIT-Assignment-MEAN.git
Cloning into '18-GIT-Assignment-MEAN'...
warning: You appear to have cloned an empty repository.

C:\wamp64\www\new-angular-2>git init
Initialized empty Git repository in C:/wamp64/www/new-angular-2/.git/

C:\wamp64\www\new-angular-2>git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        18-GIT-Assignment-MEAN/

nothing added to commit but untracked files present (use "git add" to track)

C:\wamp64\www\new-angular-2>git add .

C:\wamp64\www\new-angular-2>git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   18-GIT-Assignment-MEAN/readme.md


C:\wamp64\www\new-angular-2>git commit -nm "first commit"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'balaji@Balaji-HP.(none)')

C:\wamp64\www\new-angular-2>git config --global user.email "lissynikkytha.samiappan@cognizant.com"

C:\wamp64\www\new-angular-2>git config --global user.name "lissynikkytha"

C:\wamp64\www\new-angular-2>git commit -nm "first commit"
[master (root-commit) 5a135eb] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 18-GIT-Assignment-MEAN/readme.md

C:\wamp64\www\new-angular-2>git status
On branch master
nothing to commit, working tree clean

C:\wamp64\www\new-angular-2>git remote add origin https://github.com/Lissynikkytha/18-GIT-Assignment-MEAN.git

C:\wamp64\www\new-angular-2>git push -u origin master
Logon failed, use ctrl+c to cancel basic credential prompt.
Username for 'https://github.com': lissynikkytha

C:\wamp64\www\new-angular-2>git push -u origin master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (4/4), 282 bytes | 141.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/Lissynikkytha/18-GIT-Assignment-MEAN.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

C:\wamp64\www\new-angular-2>git checkout -b UI
Switched to a new branch 'UI'

C:\wamp64\www\new-angular-2>git branch
* UI
  master

C:\wamp64\www\new-angular-2>git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

C:\wamp64\www\new-angular-2>git checkout -b middleware
Switched to a new branch 'middleware'

C:\wamp64\www\new-angular-2>git branch
  UI
  master
* middleware

C:\wamp64\www\new-angular-2>git checkout UI
Switched to branch 'UI'

C:\wamp64\www\new-angular-2>git add .
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/inline.bundle.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/main.bundle.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/polyfills.bundle.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/styles.bundle.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in 18-GIT-Assignment-MEAN/UI/angular/vendor.bundle.js.
The file will have its original line endings in your working directory

C:\wamp64\www\new-angular-2>git status
On branch UI
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   18-GIT-Assignment-MEAN/UI/angular/assets/css/bootstrap.min.css
        new file:   18-GIT-Assignment-MEAN/UI/angular/assets/css/custom.css
        new file:   18-GIT-Assignment-MEAN/UI/angular/assets/css/font-awesome.min.css
        new file:   18-GIT-Assignment-MEAN/UI/angular/assets/js/bootstrap.min.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/assets/js/jquery.min.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/favicon.ico
        new file:   18-GIT-Assignment-MEAN/UI/angular/index.html
        new file:   18-GIT-Assignment-MEAN/UI/angular/inline.bundle.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/inline.bundle.js.map
        new file:   18-GIT-Assignment-MEAN/UI/angular/main.bundle.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/main.bundle.js.map
        new file:   18-GIT-Assignment-MEAN/UI/angular/polyfills.bundle.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/polyfills.bundle.js.map
        new file:   18-GIT-Assignment-MEAN/UI/angular/styles.bundle.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/styles.bundle.js.map
        new file:   18-GIT-Assignment-MEAN/UI/angular/vendor.bundle.js
        new file:   18-GIT-Assignment-MEAN/UI/angular/vendor.bundle.js.map


C:\wamp64\www\new-angular-2>git commit -nm "angular code commited"
[UI fcb314e] angular code commited
 17 files changed, 89388 insertions(+)
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/assets/css/bootstrap.min.css
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/assets/css/custom.css
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/assets/css/font-awesome.min.css
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/assets/js/bootstrap.min.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/assets/js/jquery.min.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/favicon.ico
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/index.html
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/inline.bundle.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/inline.bundle.js.map
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/main.bundle.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/main.bundle.js.map
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/polyfills.bundle.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/polyfills.bundle.js.map
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/styles.bundle.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/styles.bundle.js.map
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/vendor.bundle.js
 create mode 100644 18-GIT-Assignment-MEAN/UI/angular/vendor.bundle.js.map

C:\wamp64\www\new-angular-2>git push
fatal: The current branch UI has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin UI


C:\wamp64\www\new-angular-2>git push --set-upstream origin UI
Enumerating objects: 27, done.
Counting objects: 100% (27/27), done.
Delta compression using up to 4 threads
Compressing objects: 100% (23/23), done.
Writing objects: 100% (25/25), 1.16 MiB | 44.00 KiB/s, done.
Total 25 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
remote:
remote: Create a pull request for 'UI' on GitHub by visiting:
remote:      https://github.com/Lissynikkytha/18-GIT-Assignment-MEAN/pull/new/UI
remote:
To https://github.com/Lissynikkytha/18-GIT-Assignment-MEAN.git
 * [new branch]      UI -> UI
Branch 'UI' set up to track remote branch 'UI' from 'origin'.
