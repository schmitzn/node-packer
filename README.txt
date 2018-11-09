Nodec System Requirements:
- Minimum 4GB RAM (Regardless of system), system with only 2GB RAM is known to fail.

- Debian and Ubuntu based Linux:
1) curl (Used to download Node.js):
sudo apt-get install curl

2) Node.js:
https://github.com/nodesource/distributions/blob/master/README.md#debinstall

Note: This method does not allow multiple Node.js versions to be installed together. So always remember to uninstall current Node.js and install the other version FIRST if necessary (Such as supporting both Node.js 8 and 10).
To uninstall nodejs:
sudo apt-get remove nodejs

3) Ruby:
sudo apt-get install ruby

4) C compiler:
sudo apt-get install gcc

5) C++ compiler:
sudo apt-get install g++

6) make:
sudo apt-get install make

Note: squashfs-tools and python2 are assumed to be included by default.

- Red Hat, CentOS and Fedora based Linux:
1) curl (Used to download Node.js):
sudo yum install curl

2) Install Node.js from:
https://github.com/nodesource/distributions/blob/master/README.md#rpm

Note: This method does not allow multiple Node.js versions to be installed together. So always remember to uninstall current Node.js and install the other version FIRST if necessary (Such as supporting both Node.js 8 and 10).
To uninstall nodejs:
sudo apt-get remove nodejs

3) Ruby:
sudo yum install ruby

4) C compiler:
sudo yum install gcc

5) C++ compiler:
sudo yum install gcc-c++

6) make:
sudo yum install make

Note: squashfs-tools and python2 are assumed to be included by default.

- Windows
1) Microsoft Visual Studio 2017 Community Edition (Serve as C & C++ Compiler):
https://visualstudio.microsoft.com/downloads/

Required Components: "MSbuild", "VC++ 2017 v141 toolset" and one of the Windows SDKs (10 or 8.1).

2) SquashFS tools:
https://github.com/pmq20/squashfuse/files/691217/sqfs43-win32.zip

Extract the content from the zip file to a folder, and ensure that this folder is included in PATH environment variable.

3) Python 2.7.x (Python 3 is NOT supported)
https://www.python.org/downloads/

4) Ruby (There is a Windows installer package):
https://rubyinstaller.org/

This documentation is written based on Ubuntu 18.04 LTS

Test Script Usage:
A HelloWorld web app is created for testing purpose.

1) Download the corresponding nodec branch (master = Node.js 8, Series10 = Node.js 10) as a zip file.

2) Extract the contents in that zip file into 'nodec' folder.

3) Run the corresponding script file in Command Prompt / Terminal.
- Windows:
You should have the binary version of corresponding Node.js version in PATH environment variable first before double clicking on the batch file (Windows.bat). The batch file will start compiling the HelloWorld web application and prints the output in a text file (Result.txt). 

- Linux:
You should have the binary version of corresponding Node.js version installed before double clicking on the Shell Script file (Unix.sh). The Shell script file will start compiling the HelloWorld web application. The output will be printed on Terminal screen directly.

4) An executable should generate successfully in the same folder where batch / shell script files are located. For Windows executable, it can be launched with a double click (Windows.exe). For Ubuntu, it must be executed by Terminal with commands (./Unix.bin) or another shell script to run this executable via Terminal.

Source: https://askubuntu.com/questions/872683/cant-run-shared-library-in-nautilus

In either case, the browser should allow localhost:8081 as the HelloWorld web-page which also shows the Node.js version being bundled on. If there is any error, please always ensure that Port 8081 is not used by other application and that the Network Firewall settings allow the connection to localhost:8081 / 127.0.0.1:8081.