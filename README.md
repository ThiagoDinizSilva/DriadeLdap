# DryadAdmin
DriadeLdap
This project idea is to create a simple interface to manage ldap/samba databases. Allowing you to do operations in varios users or groups 
with a simple click The Idea is to access the linux(CentOS 7) server and manage ldap with ssh and smbldap-tools such as smbldap-useradd and 
smbldap-groupadd it will have a login interface and credential management. maybe in the future i'll try to create a rpm package

---Version 0.4---

now trying to get a login interface to work. the server now connects with my linux and can execute cli by alter the value of "cli" in Function 
Use located in src/config/cli.js

---Version v0.5.3---

placed some comments down the code as it started to grow bigger, rebased everything to get things more organized, next step is to model
a DB and use it to get things work. Got some experience ussing passport npm, I'll try improve it somehow

---Version v0.5.6---

containers running, now i can work from anywhere! (yay) parseExelFile now will check if file matches the requirements and will push errors 
and rows in 2 arrays, the first one will be displayed to the user so that it can be corrected and resent. The Second One Will be accepted
and pushed to mongodb. at the same time a message will appears saying "X entries accepted, X errors," and errors will be displayed to user
I'll try use react to front-end, lets see how it does