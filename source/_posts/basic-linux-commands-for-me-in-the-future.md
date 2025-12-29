---
title: 最常用的Linux指令（给未来的我）
date: 2025-06-04 00:08:19
tags: [笔记, 学习笔记, 编程开发]
categories:
  - [技术]
---

<div class="font-mono mb-8 p-4 bg-gray-50 border-l-4 border-black">
  <p class="font-bold text-sm text-gray-500 mb-1">
    <span class="text-blue-600 font-bold">[INFO]</span>
  </p>
  <p class="text-sm font-bold text-black mt-1">
    这是一篇「个人学习记录」。内容基于个人经验，可能包含 Bug 或遗漏。<br>
    请带着批判性思维阅读。
  </p>
</div>

## 0. cp, mv, rm：最早学会的工具

```bash
cp a.txt b.txt       # 复制文件
mv a.txt folder/     # 移动文件 / 改名
rm file.txt          # 删除文件
```

离谱的错误？就是手抖输成了 `rm -rf /`
用 -i 来保护自己吧：

```bash
rm -i important.txt #来二次确认
```

## 1. htop, kill：进程与服务的控制术

```bash
htop              # 彩色界面查看系统负载
kill 1234         # 杀掉指定 PID 的进程
killall node      # 杀掉所有 node 进程
systemctl restart nginx
```

以前总是被卡死的程序逼到重启整台机器，后来才知道可以优雅地 kill 掉那一个。

## 2. ping, curl, ip, ss：网络的第一把钥匙

```bash
ping 1.1.1.1             # 测试网络连通
curl ifconfig.me         # 获取公网 IP
#(其实就是一个普通的curl [source])
ip a                     # 查看本地 IP
ss -tuln                 # 查看监听端口
```

最早是为了连上 SSH，后来开始测试 API、调端口、查看服务开了没。

## 3. hostnamectl：给主机起个名字

```bash
hostnamectl #看机器的信息
hostnamectl set-hostname neko-lab #改hostname
```

顺便改改

```bash
nano /etc/hostname
nano /etc/hosts
```

## 4. resolvectl, dig：DNS 那些小麻烦

```bash
systemctl stop systemd-resolved
echo "nameserver 1.1.1.1" > /etc/resolv.conf
dig google.com
resolvectl status
```

有时候 DNS 挂了，就得自己接管。暴力替换 resolv.conf 是我的应急法宝。

### 给未来的我

你现在大概已经在用更高级的 Linux 技巧了吧？不过我相信不管走了多远，这些指令都会一直跟着你。它们也许不花哨，但确实陪我们走过了最初的路。
如果哪天忘了，可以回来看看就好啦～
