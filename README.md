# DriadeLdap
This project idea is to create a simple interface to manage ldap/samba databases. Allowing you to do operations in varios users or groups with a simple click
The Idea is to access the linux(CentOS7) server and manage ldap with ssh and smbldap-tools such as smbldap-useradd and smbldap-groupadd
it will have a login interface and credential management. maybe in the future i'll try to create a rpm package

---Version 0.4---

now trying to get a login interface to work. the server now connects with my linux and can execute cli
by alter the value of "cli" in Function Use located in src/config/cli.js
