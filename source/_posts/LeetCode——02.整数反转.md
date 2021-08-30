---
title: LeetCode——02.整数反转
date: 2020-05-25
categories: LeetCode
tags: 
- LeetCode
---
## 第7题（整数反转）
```python
def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        # 无论正负先转为正数
        integ = abs(x)
        # 定义返回的结果
        result = 0
        # 只要正数不为零就进入循环
        while integ != 0:
            # 取出最后一位
            last_num = integ % 10
            # 去掉最后一位
            integ = integ // 10
            # 组合反转后的数字，因为最后一位和导数第二位有大致十倍的关系
            result = result * 10 + last_num
        # 使得输出的数据符合特定区间 否则返回0
        if x > 0:
            if result <= 2**31 - 1:
                return result
            else:
                return 0
        else:
            if -result < -(2**31):
                return 0
            else:
                return (-result)
```