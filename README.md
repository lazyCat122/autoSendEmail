## 定时发送邮箱

#### 使用方式

**此方式借助了uniCloud**

1. 下载下来，用hbuilder打开
2. mail 文件夹下 npm 安装 "nodemailer"
3. usermail 关联 mail 文件夹
4. 进入QQ邮箱, 开启 `POP3/SMTP`, `IMAP/SMTP` 这两个服务，生成授权码，改变mail下的index.js文件
5. 关联 unicloud ，然后上传云函数
6. 进入云函数URL化，设置URL的PATH, 点击跳转，就可以发送了
7. 设置定时器触发, 编辑，添加 ["cron:0 0 8 * * *"]，就可以定时触发这个URL了(即定时发送邮件)
