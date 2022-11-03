---
title: GitHub 的 Pull Request 是指什么意思？
date: 2020-04-30
categories: Git
tags: 
- Git
---
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 https://www.zhihu.com/question/21682976 ![](https://pic2.zhimg.com/1e5f01079_xs.jpg)beepony

我尝试用类比的方法来解释一下 pull reqeust。想想我们中学考试，老师改卷的场景吧。你做的试卷就像仓库，你的试卷肯定会有很多错误，就相当于程序里的 bug。老师把你的试卷拿过来，相当于先 fork。在你的卷子上做一些修改批注，相当于 git commit。最后把改好的试卷给你，相当于发 pull request，你拿到试卷重新改正错误，相当于 merge。

当你想更正别人仓库里的错误时，要走一个流程：  

1.  先 fork 别人的仓库，相当于拷贝一份，相信我，不会有人直接让你改修原仓库的
2.  clone 到本地分支，做一些 bug fix
3.  发起 pull request 给原仓库，让他看到你修改的 bug
4.  原仓库 review 这个 bug，如果是正确的话，就会 merge 到他自己的项目中

至此，整个 pull request 的过程就结束了。

理解了 pull request 的含义和流程，具体操作也就简单了。以 Github 排名最高的 [https://github.com/twbs/bootstrap](https://link.zhihu.com/?target=https%3A//github.com/twbs/bootstrap) 为例说明。  
1. 先点击 fork 仓库，项目现在就在你的账号下了

![](https://pic3.zhimg.com/50/0d01d6aa4cc4330c525347e5b0a0ecb8_hd.jpg)![](https://pic3.zhimg.com/0d01d6aa4cc4330c525347e5b0a0ecb8_r.jpg)  
![](https://pic1.zhimg.com/50/6aaed35908e74de871fcbed7c5affb0e_hd.jpg)![](https://pic1.zhimg.com/6aaed35908e74de871fcbed7c5affb0e_r.jpg)2. 在你自己的机器上 git clone 这个仓库，切换分支（也可以在 master 下），做一些修改。  

```
~  git clone https://github.com/beepony/bootstrap.git
~  cd bootstrap
~  git checkout -b test-pr
~  git add . && git commit -m "test-pr"
~  git push origin test-pr
```

3. 完成修改之后，回到 test-pr 分支，点击旁边绿色的 Compare & pull request 按钮  

![](https://pic2.zhimg.com/50/3e1ac7f58774a79a5dd6bf8e852e4199_hd.jpg)![](https://pic2.zhimg.com/3e1ac7f58774a79a5dd6bf8e852e4199_r.jpg)4. 添加一些注释信息，确认提交  
![](https://pic3.zhimg.com/50/f5ed68dfe4d60fe90e2fb22ec1933006_hd.jpg)![](https://pic3.zhimg.com/f5ed68dfe4d60fe90e2fb22ec1933006_r.jpg)5. 仓库作者看到，你提的确实是对的，就会 merge，合并到他的项目中

以上就是 pull reqesut 的整个流程，希望对你有帮助～

参考文档：  
[Fork A Repo - User Documentation](https://link.zhihu.com/?target=https%3A//help.github.com/articles/fork-a-repo/)  
[Using pull requests](https://link.zhihu.com/?target=https%3A//help.github.com/articles/using-pull-requests/)  
[Creating a pull request](https://link.zhihu.com/?target=https%3A//help.github.com/articles/creating-a-pull-request/)![](https://pic2.zhimg.com/19ed62ad9_xs.jpg) 王赟 Maigo​

我从单纯的语言学角度解释一下为什么 “pull request” 这个词组这么令人费解。

先说正确的理解：pull request 是一个 request，它的目的是让别人 pull 你的东西。

然而 pull 和 request 两个名词直接相连构成偏正短语，二者之间具体是什么关系是不确定的。

**思考**：water hose, rubber hose, fire hose, garden hose 这四个短语中，两个词之间分别是什么关系？

我第一次看到 pull request 这个词组的时候，误以为这个 request 的目的是请求别人允许自己 pull 别人的东西。

另外，pull 和 request 还都有动词义，放到一起的时候，还可能被误解成动宾短语（pull 作动词，request 作名词）。

英语中很多单词有多种词性，另外对一串名词直接相连构成词组的句法又比较宽容，这两个性质容易被滥用，造成沟通上的不便。  
恰好汉语也具有这两个特点——你把上文中的 “pull request” 都换成“拉取请求”，看看是不是依然成立？

当然，熟悉了 GitHub 的工作流程后，你可能就不再感觉 pull request 这个词组有歧义或是费解了。

这是专业知识消除歧义的典型例子。

![](https://pic1.zhimg.com/aadd7b895_xs.jpg)匿名用户有一个仓库，叫 Repo A。你如果要往里贡献代码，首先要 Fork 这个 Repo，于是在你的 Github 账号下有了一个 Repo A2,。然后你在这个 A2 下工作，Commit，push 等。然后你希望原始仓库 Repo A 合并你的工作，你可以在 Github 上发起一个 Pull Request，意思是请求 Repo A 的所有者从你的 A2 合并分支。如果被审核通过并正式合并，这样你就为项目 A 做贡献了![](https://pic4.zhimg.com/04d3c071d_xs.jpg)程墨 Morgan

使用过 git 的应该都知道 git pull，这个命名相当于连续执行两个命令 git fetch 然后 git merge。所以，pull request 的意思就是一个 “请求”（request），请对方做一个 git fetch 拿到 request 中的代码 commits，然后 git merge 一下到某个分支上。

pull request 简称 PR，是 github 的概念，不是 git 的概念，所以也不是立刻出结果的，需要有人去同意完成这个 PR，当然同意完成 PR 的可以是自己，也可以拒绝 PR。

现实项目中，即使自己对某个 repo 的特定分枝有写入权限，也可以提 PR 来修改，因为这是 code review 的一种方式，让团队的其他人看一看改的咋样。![](https://pic2.zhimg.com/6d2ebe6e9bcee3b86a081a67b843f929_xs.jpg)冯斐我改了你们的代码，你们拉回去看看吧 ！！！