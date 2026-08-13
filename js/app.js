const LABS = [
 {id:'lab00', num:0, title:'Setup — Install Linux', analogy:'Moving into a new house', obj:['Install WSL2 or VirtualBox','Verify Linux is running']},
 {id:'lab01', num:1, title:'First Commands', analogy:'Opening folders to see inside', obj:['Navigate with pwd, ls, cd','Understand the file tree']},
 {id:'lab02', num:2, title:'File Mastery', analogy:'Filing cabinet operations', obj:['Create, copy, move, find files','Build a project folder structure']},
 {id:'lab03', num:3, title:'Permissions & Ownership', analogy:'House keys for different people', obj:['chmod numeric and symbolic','chown to change ownership']},
 {id:'lab04', num:4, title:'Text Processing', analogy:'Searching through a receipt book', obj:['grep, sed, awk, cut, sort','Pipe commands together']},
 {id:'lab05', num:5, title:'Process Management', analogy:'LASTMA controlling traffic', obj:['ps, top, kill, jobs','Background and foreground processes']},
 {id:'lab06', num:6, title:'Package Management', analogy:'App store for your server', obj:['apt update, install, remove','Install and manage software']},
 {id:'lab07', num:7, title:'Shell Scripting', analogy:'Writing a recipe the kitchen follows', obj:['Variables, loops, conditionals','Write a system health script']},
 {id:'lab08', num:8, title:'Networking Basics', analogy:'Checking if the road is clear', obj:['ip, ping, curl, ss','Configure firewall with ufw']},
 {id:'lab09', num:9, title:'SSH & Remote Access', analogy:'Sending a trusted key to a friend', obj:['Generate SSH keys','Connect without passwords']},
 {id:'capstone', num:10, title:'Capstone: Server Health Dashboard', analogy:'Your personal server doctor', obj:['Build a health check script','Set up cron for daily reports']},
];

const CONTENT = {
 lab00: `
  <div class="card analogy"><b>Analogy - Moving In:</b> Before you arrange furniture, you need a house. WSL2 gives you Linux inside Windows. VirtualBox gives you a full Linux VM. Pick one and move in.</div>
  <h3>Prerequisites</h3>
  <ul><li>Windows 10/11 (for WSL2) OR any OS with VirtualBox</li><li>~10GB free disk space</li><li>Admin access on your machine</li></ul>
  <h3>Step 1: Install WSL2 on Windows (recommended)</h3>
  <div class="code"># Open PowerShell as Administrator:
wsl --install
# This installs WSL2 + Ubuntu by default
# Restart your computer when prompted<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Installing: Virtual Machine Platform<br>Installing: Windows Subsystem for Linux<br>...<br>The requested operation is successful. Changes will not be effective until the system is rebooted.<br><i>After reboot, Ubuntu opens automatically and asks you to create a username and password.</i></div>
  <h3>Step 2: Verify Linux is running</h3>
  <div class="code"># In your Ubuntu terminal:
cat /etc/os-release
uname -r<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>NAME="Ubuntu"<br>VERSION="22.04.4 LTS (Jammy Jellyfish)"<br>...<br>5.15.153.1-microsoft-standard-WSL2<br><i>The "microsoft-standard-WSL2" in the kernel name confirms you are running WSL2.</i></div>
  <h3>Step 3: Update the system</h3>
  <div class="code">sudo apt update && sudo apt upgrade -y<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease<br>...<br>Fetched 24.5 MB in 3s<br>Reading package lists... Done<br>...<br>upgraded 15 newly installed 0, to remove 0 and not upgraded<br><i>Always update before installing anything. Like sweeping the house before you move in furniture.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li>WSL2 gives you a full Linux environment inside Windows</li><li><b>cat /etc/os-release</b> shows your Linux distribution</li><li><b>uname -r</b> shows the kernel version</li><li><b>sudo apt update</b> refreshes the package list (always do this first)</li></ul></div>
  <div class="card" style="border-color:var(--warn)"><b>Troubleshooting:</b><br><b>WSL2 not installing?</b> Enable Virtualization in BIOS (VT-x/AMD-V).<br><b>Slow performance?</b> Make sure WSL2 (not WSL1) is set: <code>wsl --set-default-version 2</code><br><b>Using VirtualBox?</b> Download Ubuntu ISO from ubuntu.com, create a new VM with 2GB RAM and 20GB disk.</div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> In a real server environment, you would SSH into an Ubuntu EC2 instance or bare metal server. WSL2 is your local training ground.</div>`,

 lab01: `
  <div class="card analogy"><b>Analogy - Opening Folders:</b> <b>ls</b> is like opening a folder to see what is inside. <b>cd</b> is like walking into a room. <b>pwd</b> is asking "which room am I in right now?"</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 00 (Linux installed)</li></ul>
  <h3>Step 1: Where am I?</h3>
  <div class="code">pwd<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>/home/nkechi<br><i>pwd = Print Working Directory. You start in your home directory, like walking into your bedroom.</i></div>
  <h3>Step 2: What is in this folder?</h3>
  <div class="code">ls
ls -la<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (ls -la):</b><br>total 24<br>drwxr-xr-x  3 nkechi nkechi 4096 Aug 13 14:00 .<br>drwxr-xr-x  3 root   root   4096 Aug 13 10:00 ..<br>-rw-r--r--  1 nkechi nkechi   22 Aug 13 14:00 .bashrc<br><i>-l = long format (permissions, owner, size, date). -a = show hidden files (starting with .).</i></div>
  <h3>Step 3: Walk into a directory</h3>
  <div class="code">cd /etc
pwd
ls | head -20<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>/etc<br>adduser.conf<br>alternatives/<br>apt/<br>...<br><i>/etc is where system config files live. Like the filing cabinet in the office. <b>head -20</b> shows only the first 20 lines.</i></div>
  <h3>Step 4: Navigate efficiently</h3>
  <div class="code">cd ~          # Go home
cd -          # Go back to previous directory
cd ..         # Go up one level
cd /var/log   # Go directly to log directory<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>~ = your home directory<br>- = toggle between last two directories<br>.. = parent directory<br>/var/log = system log files live here<br><i>These shortcuts save time. Instead of typing /home/nkechi every time, just type ~.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>pwd</b> = where am I, <b>ls</b> = what is here, <b>cd</b> = go somewhere</li><li><b>ls -la</b> = show permissions, owner, size, and hidden files</li><li><b>~</b> = home, <b>..</b> = parent, <b>-</b> = previous directory</li><li>/etc = system config, /var/log = logs, /home = user directories</li></ul></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> Use <code>ls -lh</code> for human-readable file sizes (KB, MB, GB instead of raw bytes). Use <code>ls -lt</code> to sort by date (newest first). Essential for finding recently modified files.</div>`,

 lab02: `
  <div class="card analogy"><b>Analogy - Filing Cabinet:</b> <b>touch</b> = create an empty file (blank paper). <b>cp</b> = make a photocopy. <b>mv</b> = move a file to another cabinet. <b>rm</b> = shred it. <b>find</b> = search every drawer.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 01</li></ul>
  <h3>Step 1: Create a project folder structure</h3>
  <div class="code">mkdir -p ~/naija-project/{src,logs,config,scripts}
cd ~/naija-project
touch src/app.sh src/utils.sh
echo "# Naija Project" > config/settings.conf
ls -R<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>.:<br>config  logs  scripts  src<br>./config:<br>settings.conf<br>./logs:<br>./scripts:<br>./src:<br>app.sh  utils.sh<br><i>mkdir -p creates parent directories. The {} syntax creates multiple dirs at once. ls -R lists recursively.</i></div>
  <h3>Step 2: Copy and move files</h3>
  <div class="code">cp config/settings.conf config/settings.bak
mv src/app.sh scripts/app.sh
ls -R<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>./config:<br>settings.bak  settings.conf<br>./scripts:<br>app.sh<br>./src:<br>utils.sh<br><i>cp copies (original stays). mv moves (original disappears). Always make backups before moving important files.</i></div>
  <h3>Step 3: Find files by name</h3>
  <div class="code">find ~/naija-project -name "*.sh"
find ~/naija-project -name "*.conf"<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>/home/nkechi/naija-project/scripts/app.sh<br>/home/nkechi/naija-project/src/utils.sh<br>/home/nkechi/naija-project/config/settings.conf<br><i>find searches recursively. -name uses patterns (*.sh = all .sh files). Faster than looking through every folder manually.</i></div>
  <h3>Step 4: View file contents</h3>
  <div class="code">cat config/settings.conf
head -5 config/settings.conf
tail -5 config/settings.conf
wc -l config/settings.conf<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (cat):</b><br># Naija Project<br><i>cat = show entire file. head = first N lines. tail = last N lines. wc -l = count lines. Use cat for small files, less for large files (q to quit).</i></div>
  <h3>Step 5: Clean up</h3>
  <div class="code">rm config/settings.bak
rm -rf ~/naija-project/logs<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>No output (rm is silent on success). The .bak file and empty logs directory are gone.<br><i>-r = recursive (for directories). -f = force (no confirmation). Be careful — rm does not have a recycle bin!</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>mkdir -p</b> = create nested directories, <b>touch</b> = create empty file</li><li><b>cp</b> = copy, <b>mv</b> = move/rename, <b>rm</b> = delete (no recycle bin)</li><li><b>find -name</b> = search by filename pattern</li><li><b>cat/head/tail/wc</b> = view and count file contents</li></ul></div>
  <div class="card" style="border-color:var(--warn)"><b>WARNING:</b> <code>rm -rf /</code> destroys your entire system. Always verify the path before pressing Enter. Triple-check when using -rf.</div>`,

 lab03: `
  <div class="card analogy"><b>Analogy - House Keys:</b> <b>chmod</b> is like giving different keys to different people. Owner gets the master key (rwx). Group gets a limited key (r-x). Others get a visitor key (r--). <b>chown</b> changes who owns the house.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 02</li></ul>
  <h3>Step 1: Create a file and check its permissions</h3>
  <div class="code">touch ~/secret.txt
ls -la ~/secret.txt<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>-rw-r--r-- 1 nkechi nkechi 0 Aug 13 14:00 /home/nkechi/secret.txt<br><i>Breakdown: rw- (owner: read+write) r-- (group: read only) r-- (others: read only). No execute permission.</i></div>
  <h3>Step 2: Make it private (only owner can read/write)</h3>
  <div class="code">chmod 600 ~/secret.txt
ls -la ~/secret.txt<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>-rw------- 1 nkechi nkechi 0 Aug 13 14:00 /home/nkechi/secret.txt<br><i>600 = owner rw, group nothing, others nothing. Like locking your diary. Only you can read it.</i></div>
  <h3>Step 3: Make a script executable</h3>
  <div class="code">echo '#!/bin/bash
echo "Naija Linux"' > ~/hello.sh
chmod +x ~/hello.sh
ls -la ~/hello.sh
~/hello.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>-rwxr-xr-x 1 nkechi nkechi 33 Aug 13 14:00 /home/nkechi/hello.sh<br>Naija Linux<br><i>+x adds execute permission. Without it, the script cannot run. 755 = rwxr-xr-x (owner can execute, others can read+execute).</i></div>
  <h3>Step 4: Understand the numbers</h3>
  <div class="code"># Permission reference:
# 4 = read (r)
# 2 = write (w)
# 1 = execute (x)
# 0 = no access
#
# Common combinations:
# 755 = rwxr-xr-x (executable, everyone can read/run)
# 644 = rw-r--r-- (normal file, owner writes, others read)
# 600 = rw------- (private file, owner only)
# 444 = r--r--r-- (read-only, nobody can modify)<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <h3>Step 5: Change ownership</h3>
  <div class="code">sudo chown root:root ~/hello.sh
ls -la ~/hello.sh
sudo chown nkechi:nkechi ~/hello.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (after chown root):</b><br>-rwxr-xr-x 1 root root 33 Aug 13 14:00 /home/nkechi/hello.sh<br><i>chown user:group changes both owner and group. Need sudo to give a file to root. Change it back to yourself when done.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>chmod 600</b> = private file (owner read+write only)</li><li><b>chmod +x</b> or <b>755</b> = make a script executable</li><li>4=read, 2=write, 1=execute. Add them: 7=rwx, 6=rw, 5=rx, 4=r</li><li><b>chown user:group</b> = change who owns the file</li></ul></div>
  <h3>Cleanup</h3>
  <div class="code">rm ~/secret.txt ~/hello.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> SSH private keys must be <code>chmod 600 ~/.ssh/id_rsa</code> or SSH refuses to use them. Web files should be 644. Scripts should be 755. Never use 777 — it lets anyone modify the file.</div>`,

 lab04: `
  <div class="card analogy"><b>Analogy - Receipt Book:</b> <b>grep</b> = search through a receipt book for "jollof". <b>sed</b> = replace "jollof" with "rice" in every receipt. <b>awk</b> = extract only the price column. <b>sort | uniq -c</b> = count how many times each item appears.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 03</li></ul>
  <h3>Step 1: Create a sample log file</h3>
  <div class="code">cat > ~/server.log << 'EOF'
2026-08-13 10:00:01 INFO Server started on port 80
2026-08-13 10:01:15 ERROR Connection refused from 192.168.1.5
2026-08-13 10:02:30 WARNING High memory usage: 85%
2026-08-13 10:03:45 ERROR Disk full on /dev/sda1
2026-08-13 10:04:00 INFO Backup completed successfully
2026-08-13 10:05:20 ERROR Connection refused from 10.0.0.12
2026-08-13 10:06:10 INFO Health check passed
2026-08-13 10:07:30 ERROR Database connection lost
2026-08-13 10:08:00 WARNING CPU load high: 90%
2026-08-13 10:09:15 INFO Server restarted
EOF
wc -l ~/server.log<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>10 /home/nkechi/server.log<br><i>10 lines in our log file. Now let us search and process this data.</i></div>
  <h3>Step 2: Search with grep</h3>
  <div class="code">grep "ERROR" ~/server.log
grep -c "ERROR" ~/server.log
grep -c "WARNING" ~/server.log
grep "ERROR" ~/server.log | grep "Connection"<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>2026-08-13 10:01:15 ERROR Connection refused from 192.168.1.5<br>2026-08-13 10:03:45 ERROR Disk full on /dev/sda1<br>2026-08-13 10:05:20 ERROR Connection refused from 10.0.0.12<br>2026-08-13 10:07:30 ERROR Database connection lost<br>4<br>2<br>2026-08-13 10:01:15 ERROR Connection refused from 192.168.1.5<br>2026-08-13 10:05:20 ERROR Connection refused from 10.0.0.12<br><i>grep finds lines with a pattern. -c counts matches. You can pipe grep into grep to narrow results.</i></div>
  <h3>Step 3: Replace text with sed</h3>
  <div class="code">sed 's/ERROR/CRITICAL/g' ~/server.log | head -5
sed -n '/ERROR/p' ~/server.log<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (sed s):</b><br>2026-08-13 10:01:15 CRITICAL Connection refused from 192.168.1.5<br>...<br><i>s/old/new/g = substitute old with new globally. -n '/pattern/p' = print only matching lines (like grep but with sed power).</i></div>
  <h3>Step 4: Extract columns with awk</h3>
  <div class="code">awk '{print $1, $3}' ~/server.log | head -5
awk '/ERROR/ {print $4, $5}' ~/server.log<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (awk print 1,3):</b><br>2026-08-13 INFO<br>2026-08-13 ERROR<br>2026-08-13 WARNING<br>...<br><i>awk splits by spaces. $1 = first column (date), $3 = third column (level). /ERROR/ filters for ERROR lines only, then prints columns 4 and 5.</i></div>
  <h3>Step 5: Count and sort</h3>
  <div class="code">awk '{print $3}' ~/server.log | sort | uniq -c | sort -rn<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>4 ERROR<br>2 WARNING<br>4 INFO<br><i>Extract log levels (column 3), sort them, count unique occurrences, sort by count descending. This is how you analyze log patterns in production.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>grep</b> = search for patterns, <b>grep -c</b> = count matches</li><li><b>sed</b> = find and replace text, <b>awk</b> = extract columns</li><li><b>sort | uniq -c</b> = count unique values</li><li>Pipe (|) chains commands — output of one becomes input of next</li></ul></div>
  <h3>Cleanup</h3>
  <div class="code">rm ~/server.log<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> In production, <code>grep "ERROR" /var/log/syslog | tail -20</code> shows the last 20 errors. <code>awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -10</code> shows the top 10 most frequent IP addresses. These are daily DevOps commands.</div>`,

 lab05: `
  <div class="card analogy"><b>Analogy - LASTMA:</b> <b>ps</b> = count all vehicles on the road. <b>top</b> = see which ones are causing traffic jams. <b>kill -15</b> = politely ask a driver to park. <b>kill -9</b> = tow the vehicle away by force.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 04</li></ul>
  <h3>Step 1: See all running processes</h3>
  <div class="code">ps aux | head -10
ps aux | grep bash<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (ps aux | head):</b><br>USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND<br>root 1 0.0 0.0 168 92 ? Ss 10:00 0:01 /sbin/init<br>nkechi 500 0.0 0.1 1200 600 pts/0 Ss 10:05 0:00 -bash<br>...<br><i>aux = all users, all processes, with details. PID = Process ID. %CPU and %MEM show resource usage. grep bash finds your shell processes.</i></div>
  <h3>Step 2: Monitor in real-time with top</h3>
  <div class="code">top -b -n 1 | head -15<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>top - 14:00:01 up 4:00, 1 user, load average: 0.20, 0.15, 0.10<br>Tasks: 95 total, 1 running, 94 sleeping<br>%Cpu(s): 2.3 us, 1.2 sy, 0.0 ni, 96.5 id<br>MiB Mem: 2000.0 total, 800.0 free, 500.0 used, 700.0 buff/cache<br>...<br><i>-b -n 1 = batch mode, 1 iteration (no interactive). In production, just type <code>top</code> and press q to quit. Load average shows system stress.</i></div>
  <h3>Step 3: Start a background process and find it</h3>
  <div class="code">sleep 300 &
echo "Background PID: $!"
jobs
ps aux | grep sleep<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>[1] 12345<br>Background PID: 12345<br>[1]+ Running sleep 300 &<br>nkechi 12345 0.0 0.0 1000 100 pts/0 S 14:00 0:00 sleep 300<br><i>& runs in background. $! gives the PID. jobs shows background jobs in this shell. ps confirms it is running.</i></div>
  <h3>Step 4: Kill the process politely, then forcefully</h3>
  <div class="code"># Polite kill (SIGTERM - allows cleanup):
kill 12345
# If it refuses to die, force kill (SIGKILL - no cleanup):
kill -9 12345
# Verify it is gone:
ps aux | grep sleep<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>[1]+ Terminated sleep 300<br><i>kill = SIGTERM (signal 15) = "please stop, clean up first". kill -9 = SIGKILL = immediate termination, no cleanup. Always try -15 first. Use -9 as last resort.</i></div>
  <h3>Step 5: Use nohup to keep processes alive after logout</h3>
  <div class="code">nohup sleep 600 > /tmp/nohup-test.log 2>&1 &
exit
# Log back in, check if it survived:
ps aux | grep "sleep 600"<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>nkechi 13000 0.0 0.0 1000 100 ? S 14:00 0:00 sleep 600<br><i>nohup = "no hangup" = process survives even if you close the terminal. Essential for long-running tasks. The ? in TTY column means no terminal attached.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>ps aux</b> = see all processes, <b>top</b> = real-time monitor</li><li><b>&</b> = background, <b>jobs</b> = list background jobs in this shell</li><li><b>kill -15</b> = polite stop, <b>kill -9</b> = force kill (last resort)</li><li><b>nohup</b> = keep process running after logout</li></ul></div>
  <h3>Cleanup</h3>
  <div class="code">pkill sleep
rm /tmp/nohup-test.log 2>/dev/null; true<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> In production, use <code>systemctl</code> instead of nohup for services. <code>systemctl status nginx</code> shows service status. <code>systemctl restart nginx</code> restarts it. systemd manages process lifecycle, restarts on failure, and starts on boot.</div>`,

 lab06: `
  <div class="card analogy"><b>Analogy - App Store:</b> <b>apt</b> is the Ubuntu app store. <b>apt update</b> = refresh the catalog. <b>apt install</b> = download and install. <b>apt remove</b> = uninstall. <b>apt search</b> = browse for apps.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 05</li></ul>
  <h3>Step 1: Update the package list</h3>
  <div class="code">sudo apt update<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease<br>...<br>Reading package lists... Done<br>Building dependency tree... Done<br>All packages are up to date.<br><i>Always run apt update before install. It refreshes the list of available packages and versions. Like checking the app store for new releases.</i></div>
  <h3>Step 2: Search for a package</h3>
  <div class="code">apt search nginx
apt show nginx | head -15<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (apt show):</b><br>Package: nginx<br>Version: 1.18.0-0ubuntu1<br>...<br>Description: small, powerful, scalable web/proxy server<br><i>apt search finds packages by name. apt show gives details about a specific package before installing.</i></div>
  <h3>Step 3: Install nginx</h3>
  <div class="code">sudo apt install -y nginx
nginx -v<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Reading package lists... Done<br>...<br>Setting up nginx (1.18.0-0ubuntu1) ...<br>nginx version: nginx/1.18.0<br><i>-y = yes to all prompts (non-interactive). nginx -v confirms the install worked.</i></div>
  <h3>Step 4: Start and verify the service</h3>
  <div class="code">sudo systemctl start nginx
sudo systemctl status nginx
curl http://localhost<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (status):</b><br>active (running) since ... <br><i>systemctl start = start service, status = check if running. curl http://localhost fetches the nginx welcome page HTML.</i></div>
  <h3>Step 5: Stop and remove</h3>
  <div class="code">sudo systemctl stop nginx
sudo apt remove -y nginx
sudo apt autoremove -y<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>...<br>Removing nginx (1.18.0-0ubuntu1) ...<br>...<br><i>autoremove cleans up dependencies that were installed with nginx but are no longer needed. Keeps your system lean.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>apt update</b> = refresh catalog, <b>apt install -y</b> = install package</li><li><b>apt search/show</b> = find and inspect packages before installing</li><li><b>systemctl start/stop/status</b> = control services</li><li><b>apt autoremove</b> = clean up unused dependencies</li></ul></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> Use <code>sudo apt upgrade -y</code> to update all installed packages. Schedule this monthly. Use <code>dpkg -l</code> to list all installed packages. Pin critical packages to prevent accidental upgrades: <code>apt-mark hold nginx</code>.</div>`,

 lab07: `
  <div class="card analogy"><b>Analogy - Recipe:</b> A shell script is a recipe the terminal follows step by step. Variables = ingredients. If/else = "if salt is enough, skip, else add more." For loop = "stir 10 times." Functions = "prepare the sauce" (reusable steps).</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 06</li></ul>
  <h3>Step 1: Write your first script</h3>
  <div class="code">cat > ~/naija.sh << 'EOF'
#!/bin/bash
# My first shell script

NAME="Nkechi"
echo "Hello, $NAME!"
echo "Today is $(date)"
echo "You are on $(hostname)"
EOF
chmod +x ~/naija.sh
./naija.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Hello, Nkechi!<br>Today is Thu Aug 13 14:00:00 WAT 2026<br>You are on ubuntu-server<br><i>#!/bin/bash = shebang (tells system to use bash). Variables use $ to expand. $(command) runs a command and inserts output.</i></div>
  <h3>Step 2: Add conditionals</h3>
  <div class="code">cat > ~/check.sh << 'EOF'
#!/bin/bash
DISK=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
echo "Disk usage: ${DISK}%"

if [ "$DISK" -gt 80 ]; then
    echo "WARNING: Disk almost full!"
elif [ "$DISK" -gt 50 ]; then
    echo "CAUTION: Disk getting full."
else
    echo "OK: Plenty of space."
fi
EOF
chmod +x ~/check.sh
./check.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Disk usage: 35%<br>OK: Plenty of space.<br><i>df / shows disk usage for root partition. tail -1 skips header. awk extracts column 5. tr -d '%' removes the percent sign. if/elif/else checks thresholds.</i></div>
  <h3>Step 3: Add loops</h3>
  <div class="code">cat > ~/loop.sh << 'EOF'
#!/bin/bash
echo "=== Checking Naija Servers ==="
SERVERS=("lagos-01" "abuja-01" "ph-01")
for server in "${SERVERS[@]}"; do
    echo "Pinging $server..."
    ping -c 1 -W 1 "$server" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "  $server is UP"
    else
        echo "  $server is DOWN"
    fi
done
EOF
chmod +x ~/loop.sh
./loop.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>=== Checking Naija Servers ===<br>Pinging lagos-01...<br>  lagos-01 is DOWN<br>Pinging abuja-01...<br>  abuja-01 is DOWN<br>Pinging ph-01...<br>  ph-01 is DOWN<br><i>The servers are "down" because they do not exist. In production, replace with real hostnames. $? checks the exit code of the previous command (0 = success).</i></div>
  <h3>Step 4: Add a function</h3>
  <div class="code">cat > ~/func.sh << 'EOF'
#!/bin/bash
check_service() {
    if systemctl is-active --quiet "$1"; then
        echo "$1: RUNNING"
    else
        echo "$1: STOPPED"
    fi
}

check_service ssh
check_service nginx
check_service docker
EOF
chmod +x ~/func.sh
./func.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>ssh: RUNNING<br>nginx: STOPPED<br>docker: STOPPED<br><i>Functions are reusable blocks. $1 = first argument passed to the function. systemctl is-active --quiet returns 0 if running, non-zero if not.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>#!/bin/bash</b> = shebang, <b>$(command)</b> = command substitution</li><li><b>if/elif/else/fi</b> = conditionals, <b>-gt/-lt/-eq</b> = numeric comparisons</li><li><b>for/do/done</b> = loops, <b>$?</b> = exit code of last command</li><li><b>function_name() {}</b> = define functions, <b>$1</b> = first argument</li></ul></div>
  <h3>Cleanup</h3>
  <div class="code">rm ~/naija.sh ~/check.sh ~/loop.sh ~/func.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> Always use <code>set -e</code> at the top of production scripts to stop on first error. Use <code>set -x</code> for debugging (prints each command before running). Validate inputs with <code>[ -z "$1" ] && echo "Usage: $0 <arg>" && exit 1</code>.</div>`,

 lab08: `
  <div class="card analogy"><b>Analogy - Checking the Road:</b> <b>ip addr</b> = check your house address. <b>ping</b> = check if the road to a destination is clear. <b>curl</b> = send a messenger to fetch something. <b>ufw</b> = the security guard at the gate controlling who enters.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 07</li></ul>
  <h3>Step 1: Check your IP address</h3>
  <div class="code">ip addr show
ip addr show | grep "inet "
hostname -I<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>inet 127.0.0.1/8 scope host lo<br>inet 172.20.50.1/20 brd 172.20.63.255 scope global eth0<br>172.20.50.1<br><i>127.0.0.1 = localhost (loopback). 172.20.50.1 = your actual IP on the network. hostname -I shows just the IP addresses.</i></div>
  <h3>Step 2: Test connectivity</h3>
  <div class="code">ping -c 4 google.com
curl -s -o /dev/null -w "%{http_code}" https://google.com
wget -q -O /tmp/test.html https://example.com && echo "Download OK"<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output (ping):</b><br>PING google.com (142.250.80.46) 56(84) bytes of data.<br>64 bytes from 142.250.80.46: icmp_seq=1 ttl=117 time=12.3 ms<br>...<br>4 packets transmitted, 4 received, 0% packet loss<br><i>ping -c 4 = send 4 packets. 0% loss = good connection. curl -w "%{http_code}" = get just the HTTP status (200 = OK).</i></div>
  <h3>Step 3: Check open ports</h3>
  <div class="code">ss -tlnp
ss -tlnp | grep ":22 "<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>State Recv-Q Send-Q Local Address:Port Peer Address:Port<br>LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=500,fd=3))<br>...<br><i>ss = socket statistics (replaces netstat). -t = TCP, -l = listening, -n = numeric ports, -p = process. Shows what ports are open and which process owns them.</i></div>
  <h3>Step 4: Configure firewall with ufw</h3>
  <div class="code">sudo ufw status
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw status verbose<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Status: inactive<br>Command may disrupt existing SSH connections. Proceed with operation (y|n)? y<br>Firewall is active and enabled on system startup<br>Rules updated<br>Rules updated<br>Status: active<br>  To Action From<br>  22/tcp ALLOW Anywhere<br>  80/tcp ALLOW Anywhere<br><i>ufw = Uncomplicated Firewall. enable turns it on. allow opens a port. ALWAYS allow ssh before enabling, or you will lock yourself out.</i></div>
  <h3>Step 5: Disable firewall (for cleanup)</h3>
  <div class="code">sudo ufw disable<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Firewall stopped and disabled on system startup<br><i>Disabling for lab cleanup. In production, keep it enabled and only allow necessary ports (22, 80, 443).</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>ip addr</b> = check IP, <b>ping</b> = test connectivity, <b>curl/wget</b> = fetch from web</li><li><b>ss -tlnp</b> = see open ports and owning processes</li><li><b>ufw enable/allow</b> = control firewall. ALWAYS allow SSH first</li><li>In production, only open ports 22 (SSH), 80 (HTTP), 443 (HTTPS)</li></ul></div>
  <div class="card" style="border-color:var(--warn)"><b>WARNING:</b> If you enable ufw without allowing SSH, you will be locked out of remote servers. Always run <code>sudo ufw allow ssh</code> BEFORE <code>sudo ufw enable</code>.</div>`,

 lab09: `
  <div class="card analogy"><b>Analogy - Trusted Key:</b> SSH keys are like giving a trusted friend a copy of your house key. They can enter without knocking (no password). You keep the private key, they get the public key. Lose the private key and anyone who finds it can enter.</div>
  <h3>Prerequisites</h3>
  <ul><li>Completed Lab 08</li><li>Two machines OR use localhost for practice</li></ul>
  <h3>Step 1: Generate an SSH key pair</h3>
  <div class="code">ssh-keygen -t ed25519 -C "nkechi@nkydigitech"
# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one for extra security)
ls -la ~/.ssh/<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Generating public/private ed25519 key pair.<br>Enter file in which to save the key (/home/nkechi/.ssh/id_ed25519):<br>...<br>Your identification has been saved in /home/nkechi/.ssh/id_ed25519<br>Your public key has been saved in /home/nkechi/.ssh/id_ed25519.pub<br>...<br>-rw------- 1 nkechi nkechi 411 Aug 13 14:00 id_ed25519<br>-rw-r--r-- 1 nkechi nkechi 96 Aug 13 14:00 id_ed25519.pub<br><i>Private key (id_ed25519) = 600 permissions, NEVER share. Public key (id_ed25519.pub) = 644, safe to share. ed25519 is modern and more secure than RSA.</i></div>
  <h3>Step 2: Copy your public key to a remote server</h3>
  <div class="code"># For practice, copy to localhost:
ssh-copy-id nkechi@localhost
# For real server:
# ssh-copy-id user@server-ip<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s)<br>...<br>Number of key(s) added: 1<br>Now try logging into the machine with: "ssh nkechi@localhost"<br>...<br><i>ssh-copy-id appends your public key to ~/.ssh/authorized_keys on the remote server. After this, you can SSH without a password.</i></div>
  <h3>Step 3: Connect without password</h3>
  <div class="code">ssh nkechi@localhost "echo 'Connected without password!'"
ssh nkechi@localhost "hostname"<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>Connected without password!<br>ubuntu-server<br><i>No password prompt! The key pair handles authentication. You can run commands remotely with ssh user@host "command".</i></div>
  <h3>Step 4: Secure SSH (disable password auth)</h3>
  <div class="code">sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo systemctl restart sshd
# Now only key-based auth works (more secure)<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>No output on success. SSH is restarted with password auth disabled. Only key-based access works now.<br><i>This is production security. Bots try to brute-force passwords 24/7. Disabling password auth stops them completely.</i></div>
  <h3>Step 5: Use SSH config for shortcuts</h3>
  <div class="code">cat > ~/.ssh/config << 'EOF'
Host naija-server
    HostName 192.168.1.100
    User nkechi
    IdentityFile ~/.ssh/id_ed25519
    Port 22
EOF
# Now just: ssh naija-server (instead of ssh nkechi@192.168.1.100)
chmod 600 ~/.ssh/config<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>No output. File created with 600 permissions. Now <code>ssh naija-server</code> connects with all settings pre-configured.<br><i>SSH config saves typing. Especially useful when managing multiple servers with different users, ports, and keys.</i></div>
  <h3>What You Learned</h3>
  <div class="card"><ul><li><b>ssh-keygen</b> = generate key pair (private + public)</li><li><b>ssh-copy-id</b> = install public key on remote server</li><li><b>ssh user@host "command"</b> = run command remotely without login</li><li>Disable password auth in production for security</li><li><b>~/.ssh/config</b> = shortcuts for frequently used connections</li></ul></div>
  <h3>Cleanup</h3>
  <div class="code"># Re-enable password auth:
sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo systemctl restart sshd
rm ~/.ssh/config 2>/dev/null; true<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Note:</b> Use a passphrase on your SSH key for extra security (ssh-agent remembers it for the session). Use <code>ssh-copy-id -i ~/.ssh/id_ed25519.pub</code> to specify which key. Rotate keys annually. Use <code>fail2ban</code> to block IPs that fail SSH auth too many times.</div>`,

 capstone: `
  <div class="card analogy"><b>Analogy - Server Doctor:</b> This script is your personal server doctor. It checks the heartbeat (CPU), blood pressure (memory), lungs (disk), nervous system (network), and vital organs (services). If anything is wrong, it writes a report and sounds an alarm.</div>
  <h3>What You're Building</h3>
  <div class="card">A comprehensive bash script that:
  1. Checks disk usage (df)
  2. Checks memory (free)
  3. Checks CPU load (uptime)
  4. Checks running services (systemctl)
  5. Checks network connectivity (ping)
  6. Generates a timestamped report file
  7. Alerts if any check fails
  8. Runs automatically via cron</div>
  <h3>Step 1: Create the script</h3>
  <div class="code">cat > ~/server-health.sh << 'SCRIPT'
#!/bin/bash
# Server Health Dashboard — Naija DevOps
# Built by Nkechi Ahanonye

REPORT="/tmp/health-report-$(date +%Y%m%d-%H%M%S).txt"
ALERT=0

echo "========================================" > "$REPORT"
echo "  SERVER HEALTH REPORT" >> "$REPORT"
echo "  Date: $(date)" >> "$REPORT"
echo "  Host: $(hostname)" >> "$REPORT"
echo "========================================" >> "$REPORT"
echo "" >> "$REPORT"

# 1. Disk Check
echo "--- DISK USAGE ---" >> "$REPORT"
df -h / | tail -1 >> "$REPORT"
DISK_PCT=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
if [ "$DISK_PCT" -gt 80 ]; then
    echo "ALERT: Disk usage above 80%! Currently at ${DISK_PCT}%" >> "$REPORT"
    ALERT=1
fi
echo "" >> "$REPORT"

# 2. Memory Check
echo "--- MEMORY USAGE ---" >> "$REPORT"
free -h >> "$REPORT"
MEM_PCT=$(free | awk '/Mem:/ {printf "%.0f", $3/$2*100}')
if [ "$MEM_PCT" -gt 90 ]; then
    echo "ALERT: Memory usage above 90%! Currently at ${MEM_PCT}%" >> "$REPORT"
    ALERT=1
fi
echo "" >> "$REPORT"

# 3. CPU Load
echo "--- CPU LOAD ---" >> "$REPORT"
uptime >> "$REPORT"
LOAD=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | tr -d ',')
CPU_CORES=$(nproc)
echo "CPU cores: $CPU_CORES" >> "$REPORT"
echo "Current load: $LOAD" >> "$REPORT"
if [ "$(echo "$LOAD > $CPU_CORES" | bc)" -eq 1 ]; then
    echo "ALERT: Load ($LOAD) exceeds CPU cores ($CPU_CORES)!" >> "$REPORT"
    ALERT=1
fi
echo "" >> "$REPORT"

# 4. Services Check
echo "--- CRITICAL SERVICES ---" >> "$REPORT"
for svc in sshd cron networking; do
    if systemctl is-active --quiet "$svc" 2>/dev/null; then
        echo "  $svc: RUNNING" >> "$REPORT"
    else
        echo "  $svc: STOPPED or not found" >> "$REPORT"
    fi
done
echo "" >> "$REPORT"

# 5. Network Check
echo "--- NETWORK CONNECTIVITY ---" >> "$REPORT"
if ping -c 1 -W 2 8.8.8.8 > /dev/null 2>&1; then
    echo "  Internet: OK (8.8.8.8 reachable)" >> "$REPORT"
else
    echo "  Internet: FAILED (cannot reach 8.8.8.8)" >> "$REPORT"
    ALERT=1
fi
echo "" >> "$REPORT"

# Summary
echo "========================================" >> "$REPORT"
if [ "$ALERT" -eq 1 ]; then
    echo "  STATUS: ATTENTION NEEDED" >> "$REPORT"
else
    echo "  STATUS: ALL CLEAR" >> "$REPORT"
fi
echo "========================================" >> "$REPORT"

# Display and alert
cat "$REPORT"
echo ""
echo "Report saved to: $REPORT"
if [ "$ALERT" -eq 1 ]; then
    echo "ALERT: Issues detected! Check the report."
fi
SCRIPT
chmod +x ~/server-health.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <h3>Step 2: Run the health check</h3>
  <div class="code">~/server-health.sh<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>========================================<br>  SERVER HEALTH REPORT<br>  Date: Thu Aug 13 14:00:00 WAT 2026<br>  Host: ubuntu-server<br>========================================<br><br>--- DISK USAGE ---<br>/dev/sda1  15G  6.0G  8.2G  42% /<br><br>--- MEMORY USAGE ---<br>  total  used  free  shared  buff/cache  available<br>Mem: 2.0Gi  500Mi  800Mi  20Mi  700Mi  1.3Gi<br>...<br>--- CRITICAL SERVICES ---<br>  sshd: RUNNING<br>  cron: RUNNING<br>...<br>--- NETWORK CONNECTIVITY ---<br>  Internet: OK (8.8.8.8 reachable)<br><br>========================================<br>  STATUS: ALL CLEAR<br>========================================<br><br>Report saved to: /tmp/health-report-20260813-140000.txt</div>
  <h3>Step 3: Schedule with cron</h3>
  <div class="code">crontab -e
# Add this line to run daily at 8 AM:
0 8 * * * /home/nkechi/server-health.sh >> /tmp/health-daily.log 2>&1
# Save and exit (in nano: Ctrl+X, Y, Enter)<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>crontab: installing new crontab<br><i>The script now runs automatically every day at 8 AM. Output is appended to /tmp/health-daily.log. Cron is how production systems automate recurring tasks.</i></div>
  <h3>Step 4: Verify cron is set</h3>
  <div class="code">crontab -l<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card"><b>Expected Output:</b><br>0 8 * * * /home/nkechi/server-health.sh >> /tmp/health-daily.log 2>&1<br><i>crontab -l lists all scheduled jobs. Five fields: minute, hour, day, month, weekday. * = every.</i></div>
  <h3>Success Criteria</h3>
  <div class="card"><ul><li>Script runs and generates a timestamped report</li><li>Disk, memory, CPU, services, and network are all checked</li><li>Alerts trigger when thresholds are exceeded</li><li>Cron job schedules it for daily execution</li><li>Report file is saved to /tmp with timestamp</li></ul></div>
  <h3>What You Built</h3>
  <div class="card">You combined everything from Labs 00-09 into one production-grade script:
  File operations (creating the script)
  Permissions (chmod +x to make it executable)
  Text processing (df, free, uptime, awk to extract data)
  Process management (systemctl to check services)
  Package management (services installed via apt)
  Shell scripting (variables, loops, conditionals, functions)
  Networking (ping to check connectivity)
  Cron (automate daily execution)
  This is a real DevOps task. Every production server needs health monitoring. You just built it from scratch.</div>
  <h3>Cleanup</h3>
  <div class="code">crontab -r
rm ~/server-health.sh /tmp/health-report-*.txt /tmp/health-daily.log 2>/dev/null; true<button class="btn copy" onclick="copyCode(this)">Copy</button></div>
  <div class="card" style="border-color:var(--ok)"><b>Production Checklist:</b><br>1. Email the report: add <code>mail -s "Server Health" admin@nkydigitech.com < "$REPORT"</code><br>2. Send to Slack/Discord webhook on alert<br>3. Store reports in /var/log/health-reports/ instead of /tmp<br>4. Add more checks: specific ports, SSL cert expiry, backup status<br>5. Use Prometheus + Grafana for graphical dashboards (future blueprint)</div>`
};

let activeId = 'lab00';
function getProgress(){ try{return JSON.parse(localStorage.getItem('linux-blueprint-progress')||'{}')}catch{return{}} }
function saveProgress(p){ localStorage.setItem('linux-blueprint-progress', JSON.stringify(p)); updateProgressBar(); renderSidebar(); }
function updateProgressBar(){
  const p=getProgress(); const done=Object.values(p).filter(Boolean).length; const pct=Math.round(done/LABS.length*100);
  document.getElementById('progressBar').style.width=pct+'%';
  document.getElementById('progressText').textContent=pct+'% '+done+'/'+LABS.length;
  document.getElementById('celebrate').style.display=done===LABS.length?'block':'none';
}
function renderSidebar(){
  const q=document.getElementById('search').value.toLowerCase();
  document.getElementById('sidebarList').innerHTML = LABS.filter(l=> l.title.toLowerCase().includes(q) || l.analogy.toLowerCase().includes(q)).map(l=>{
    const p=getProgress(); const done=p[l.id];
    return `<div class="lab-item ${l.id===activeId?'active':''}" onclick="openLab('${l.id}')">
      <div class="check ${done?'done':''}">${done?'✓':''}</div>
      <div><div style="font-weight:700;font-size:13px">Lab ${l.num}: ${l.title}</div><div style="font-size:11px;color:var(--muted)">${l.analogy}</div></div>
    </div>`;
  }).join('');
}
function openLab(id){
  activeId=id; const lab=LABS.find(l=>l.id===id);
  document.getElementById('main').innerHTML = `
    <div class="hero">
      <span class="badge">Lab ${lab.num}</span> <span class="badge">${lab.analogy}</span>
      <h1>${lab.title}</h1>
      <div style="color:var(--muted)">Objectives: ${lab.obj.join(' | ')}</div>
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn primary" onclick="markDone('${id}')">Mark as Complete</button>
        <button class="btn" onclick="copyAll()">Copy Lab Commands</button>
      </div>
    </div>
    <div id="labContent">${CONTENT[id]||''}</div>
  `;
  renderSidebar();
  window.scrollTo(0,0);
}
function markDone(id){
  const p=getProgress(); p[id]=!p[id]; saveProgress(p);
  openLab(id);
}
function copyCode(btn){
  const code=btn.parentElement.textContent.replace('Copy','').trim();
  navigator.clipboard.writeText(code);
  btn.textContent='Copied!'; setTimeout(()=>btn.textContent='Copy',1500);
}
function copyAll(){
  const el=document.getElementById('labContent'); const codes=[...el.querySelectorAll('.code')].map(c=>c.innerText.replace('Copy','').trim());
  navigator.clipboard.writeText(codes.join('\n\n'));
  alert('All commands copied to clipboard!');
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', cur==='dark'?'light':'dark');
}
document.getElementById('search').addEventListener('input', renderSidebar);
renderSidebar(); openLab('lab00'); updateProgressBar();
