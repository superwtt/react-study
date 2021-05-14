let isMount = true; // 区分组件是mount还是update
let workInProgressHook = null; // 记录当前正在处理哪个hook，链表的指针指向当前的hook

const fiber = {
  stateNode: App, //保存组件的本身
  memoizedState: null, // 保存useState的数据，一条链表，因为useState会有很多个，一个接一个的调用
};

function schedule() {
  workInProgressHook = fiber.memoizedState; // 每次触发一次新的更新，需要将当前运行的指针重新指向第一个
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function useState(initialState) {
  // useState计算出当前新的状态 以及 改变状态的方法
  let hook;

  if (isMount) {
    hook = {
      memoizedState: initialState, // 记录当前useState对应的值，这里是num
      next: null,
      queue: {
        // 保存我们传入的需要改变的新的状态
        pending: null,
      },
    };
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  // todo 上面是取到了当前的数据  接下来需要计算新的值
  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);

    hook.queue.pending = null;
  }

  hook.memoizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction(queue, action) {
  const update = {
    // 代表一次更新
    action,
    next: null,
  };

  if (queue.pending === null) {
    // 当前的hook是否有需要触发的更新
    // u0->u0->u0 环状链表,因为更新是有优先级的，用户的点击发生的更新优先级更高
    update.next = update;
  } else {
    // 把新创建的更新插入到链表中
    // u1->u0->u1
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

function App() {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1] = useState(0);

  console.log("isMount?", isMount);
  console.log("num:", num);

  return {
    onClick() { 
      updateNum(num + 1);
    },
  };
}

window.app = schedule();

export default App
