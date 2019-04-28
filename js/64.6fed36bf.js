(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1214:function(n,e,a){},881:function(n,e,a){"use strict";a.r(e),a.d(e,"default",function(){return T});var t=a(17),s=a.n(t),l=a(18),o=a.n(l),i=a(19),d=a.n(i),r=a(44),c=a.n(r),m=a(20),v=a.n(m),b=a(14),u=a.n(b),P=a(891),T=(a(1214),function(n){function e(){var n,t;s()(this,e);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return t=o()(this,(n=d()(e)).call.apply(n,[this].concat(i))),u()(c()(t),"document",function(){return{document:a(934),className:"tabs-page"}}),t}return v()(e,n),e}(P.a))},934:function(n,e){n.exports='# Tabs 标签页\n\n\n\n## 基本用法\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 可滑动\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs canSwipe onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">试试点我左滑</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">试试点我右滑</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 指定默认选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs defaultValue={1}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 指定线条宽度\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs lineWidth={60}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 禁用指定选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2" disabled>\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n### Tabs\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | string | - | 值 |\n| defaultValue | string | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| canSwipe | boolean | false | 是否支持滑动切换 |\n| lineWidth | number \\| string | - | 线条宽度 |\n| onChange | (index?: number) => void | - | 值变化时触发的回调函数 |\n\n\n### Panel\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| disabled | boolean | false | 是否禁用 |\n| title | string | - | 标题 |\n'}}]);