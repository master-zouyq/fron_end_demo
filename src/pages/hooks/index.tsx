import React from 'react';
import CounterClass from '../../components/CounterClass';
import CounterFunc from '../../components/CounterFunc';
import CanRomoveList from '../../components/CanRemoveList';
import Stopwatch from '../../components/Stopwatch';

export default () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <p>class 组件。使用state管理状态</p>
      <CounterClass />
      <p>函数 组件。使用useState创建并管理状态</p>
      <CounterFunc />
      <p>函数 组件。动态删除list</p>
      <CanRomoveList />
      <p>下面实现一个秒表，使用到了useEffect</p>
      <Stopwatch/>
    </div>
  );
}
