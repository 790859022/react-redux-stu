- [快速创建一个react项目](#快速创建一个react项目)  
- [JSX](#jsx)   
- [React组件的数据](#react组件的数据)   
    - [props](#props)
    - [propTypes](#proptypes)
    - [state](#state)
    - [prop 和 state的对比](#prop-和-state的对比)
- [组件的生命周期](#组件的生命周期)
    - [装载过程](#装载过程)
        - [constructor](#constructor)
        - [getInitialState 和 getDefaultProps](#getinitialstate-和-getdefaultprops)
        - [render](#render)
        - [componentWillMount 和 componentDidMount](#componentwillmount-和-componentdidmount)
    - [更新过程](#更新过程)
        - [componentWillReceiveProps](#componentwillreceiveprops)
        - [shouldComponentUpdate (nextProps, nextState)](#shouldcomponentupdate-nextprops-nextstate)
        - [componentWillUpdate 和 componentDidUpdate](#componentwillupdate-和-componentdidupdate)
    - [卸载过程 componentWillUnmount](#卸载过程-componentwillunmount)
- [组件向外传递数据](#组件向外传递数据)

### 快速创建一个react项目
> 使用create-react-app     

    // 安装create-react-app
    npm install create-react-app --global
    // 创建项目
    create-react-app first_react_app
    cd first_react_app
    // 运行
    npm start
    

### JSX
>   JSX，是JavaScript语法的扩展，在JavaScript中可以编写想HTML一样的代码。  
React 判断一个元素是 HTML 元素还是 React 组件的原则就是看第一个字母是否大写。

### React组件的数据
>   React 组件的数据分为两种， prop 和 state ，无论 prop 或者 state 的改变，都可能引发组件的重新渲染。  
prop 是组件的对外接口， state 是组件的内部状态，对外用
prop ，内部用 state 。

- #### props
    >   React 组件的 prop 所能支持的类型则丰富得多，除了字符串，可以是任何
    一种 JavaScript 语言支持的数据类型 。   
    当 prop 的类型不是字符串类型时，在 JSX 中必
须用花括号｛｝把 prop 值包住，所以 style 的值有两层花括号，外层花括号代表是 JSX 的
语法，内层的花括号代表这是一个对象常量。

- #### propTypes
    >   既然 prop 是组件的对外接口，那么就应该有某种方式让组件声明自己的接口规范 。  
    在 ES6 方法定义的组件类中，可以通过增加类的 propTypes 属性来定义 prop 规格，
这不只是声明，而且是一种限制，在运行时和静态代码检查时，都可以根据 propTypes
判断外部世界是否正确地使用了组件的属性 。

    - 这个组件支持哪些 prop;
    - 每个 prop 应该是什么样的格式。
    
        ```
        //要求 caption 必须是 string 类型， initValue 必须是 number 类型 。caption 带上了 isRequried ，这表示使用 Counter组件必须要指定 caption ；而 initValue 因为没有 isRequired ，则表示如果没有也没关系 。
        
        Counter.propTypes = (
            caption: PropTypes.string.isRequired,
            initValue: PropTypes.number
        }
        ```

        > ==propTypes 虽然能够在开发阶段发现代码中的问题，但是放在产品环境中就不大合适了。首先，定义类的 propTypes 属性，无疑是要占用一些代码空间，而且 propTypes 检查也是要消耗 CPU 计算资源的 。 其次，在产品环境下做 propTypes 检查没有什么帮助，毕竟， propTypes 产生的这些错误信息只有开发者才能看得懂，放在产品环境下，在最终用户的浏览器 Console 中输出这些错误信息没什么意义 。所以，最好的方式是，开发者在代码中定义 propTypes ，在开发过程中避免犯错，但是在发布产品代码时，用一种自动的方式将 propTypes 去掉，这样最终部署到产品环境的代码就会更优 。 现有的 babel-react-optimize 就具有这个功能，可以通过 npm 安装，但是应该确保只在发布产品代码时使用它 。==

- #### state
    >   state 代表组件的内部状态 。state 代表组件的内部状态 。组件的 state 必须是一个 JavaScript 对象。   
    通过 this.state 可以读取到组件的当前 state 。 改变组
    件 state 必须要使用 this.setState 函数，而不能直接去修改 this.state 。

    > 直接修改 this.state的值，虽然事实上改变了组件的内部状态，但只是野蛮地修改了state，却没有驱动组件进行重新渲染，既然组件没有重新渲染，当然不会反应 this.state值的变化；   
    而 this.setState（）函数所做的事情，首先是改变 this.state 的值，然后驱动组件经历更新过程，这样才有机会让 this.state 里新的值出现在界面上 。

- #### prop 和 state的对比
    - prop 用于定义外部接口， state 用于记录内部状态；
    - prop 的赋值在外部世界使用组件时， state 的赋值在组件内部；
    - 组件不应该改变 prop 的值，而 state存在的目的就是让组件来改变的 。
    

### 组件的生命周期
> 生命周期可能会经历如下三个过程：   
1、装载过程（ Mount），也就是把组件第一次在 DOM 树中渲染的过程；
2、更新过程（ Update ），当组件被重新渲染的过程；  
3、卸载过程（ Unmount），组件从 DOM 中删除的过程 。

- #### 装载过程
    > 当组件第一次被渲染的时候，依次调用的函数是:  
    constructor  
    getlnitialState  
    getDefaultProps  
    componentWillMount  
    render  
    componentDidMount

    - ##### constructor
        1、初始化 state
        > 因为组件生命周期中任何函数都可能要访问 state ，那么整个生命周期中第一个被调用的构造函数自然是初始化 state 最理想的地方；
        
        2、绑定成员函数的 this 环境 
        > 在 ES6 语法下，类的每个成员函数在执行时的 this 并不是和类实例自动绑定的 。 而在构造函数中， this 就是当前组件实例，所以，为了方便将来的调用，往往在构造函数中将这个实例的特定函数绑定 this 为当前实例。
        
        ```
        class A extends Component{
            constructor(){
               this.clickHandler = this.clickHandler.bind(this); 
               
               //或者 ::操作符叫做bind操作符，目前不是ES标准语法一部分，不建议使用
               this.clickHandler = ::this.clickHandler
            }
            
            clickHandler(){
                ...
            }
        }
        ```

    - ##### getInitialState 和 getDefaultProps
    
        > getInitialState 这个函数的返回值会用来初始化组件的 this.state ，但是，这个方法只
有用 React. createClass 方法创造的组件类才会发生作用，ES6中则不用该方法。  
getDefaultProps 函数的返回值可以作为 props 的初始值，和 getlnitia!S tate 一样，这
个函数只在 React.createClass 方法创造的组件类才会用到 。

        ```
        class A extends Component{
            constructor(){
                //初始化 state
                this.state={
                    data:[]
                }
            }
        }
        //通过类的defaultProps 给指定的props赋值
        A.defaultProps = {
            return{
                sampleProp:0
            }
        }
        ```
    - ##### render
        > 一个 React 组件可以忽略其他所有函
数都不实现，但是一定要实现 render 函数，因为所有 React 组件的父类 React.Component
类对除 render 之外的生命周期函数都有默认实现 。  
某些特殊组件的作用不是渲染界面，或者，组件在某些情况下选择没有东西
可画，那就让 render 函数返回一个 null 或者 false ，等于告诉 React，这个组件这次不需
要渲染任何 DOM 元素 。

    - ##### componentWillMount 和 componentDidMount
        > componentWil!Mount 会在调用 render 函数之前被调用，通常不用定义 componentWillMount 函数，所有可以在这个 componentWillMount 中做的事情，都可以提前到 constructor 中间去做。   
        
        > componentDidMount 会在调用 render 函数之后被调用，但并不是调用完render后立刻调用。
        componentDidMount 被调用的时候， render 函数返回的东西已 经引发了渲染，
组件已经被“装载”到了 DOM 树上 。  
<br>
==因为 render 函数本身并不往 DOM 树上渲染或者装载内
容，它只是返回一个 JSX 表示的对象，然后由 React 库来根据返回对象决定如何渲染 。
而 React 库肯定是要把所有组件返回的结果综合起来，才能知道该如何产生对应的 DOM
修改 。 所以，只有 React 库调用所有组件的 render 函数之后，才有可能完成装
载，这时候才会依次调用各个组件的 componentDidMount 函数作为装载过程的收尾 。==   
<br>
componentWilIMount 和 componentDidMount 这对兄弟函数还有一个区别，就是 componentWillMount 可以在服务器端被调用，也可以在浏览器端被调用；而 component-DidMount
只能在浏览器端被调用，在服务器端使用 React 的时候不会被调用 。

- #### 更新过程
    > 更新过程会依次调用下面的生命周期函数  
    componentWillReceiveProps   
    shouldComponentUpdate  
    componentWillUpdate   
    render  
    componentDidUpdate

    - ##### componentWillReceiveProps
        > 只
要是父组件的 render 函数被调用，在 render 函数里面被谊染的子组件就会经历更新过
程，不管父组件传给子组件的 props 有没有改变，都会触发子组件的 componentWillReceiveProps 函数 。  
<br>
所以，这个函数
有必要把传入参数 nextProps 和 this.props 作必要对比 。 nextProps 代表的是这一次渲染传
入的 props 值， this.props 代表的上一次渲染时的 props 值，只有两者有变化的时候才有
必要调用 this.setState 更新内部状态 。

    - ##### shouldComponentUpdate (nextProps, nextState)
        > 除了 render 函数， shouldComponentUpdate 可能是 React 组件生命周期中最重要的一
个函数了 。是因为 render 函数决定了该渲染什么，而说 shouldComponentUpdate 函数重要，是因为它决定了一个组件什么时候不需要渲染 。
<br>  
render 函数的返回结果将用于构造 DOM 对象，而 shouldComponentUpdate 函数返回一个布尔值，告诉 React 库这个组件在这次更新过程中是否要继续 。  
<br>
==值得一提的是，通过 this .setState 函数引发更新过程，并不是立刻更新组件的 state
值，在执行到函数 shouldComponentUpdate 的时候， this . state 依然是 this.setState 函数
执行之前的值，所以我们要做的实际上就是在 nextProps 、 nextState 、 this.props 和 this.
state 中互相比对 。==

        ```
        // 通过判断前后props.title 和 state.count 是否有变化 来决定 是否执行render
    	shouldComponentUpdate(nextProps,nextState){
    		return (nextProps.title !== this.props.title) || (nextState.count !== this.state.count)
    	}
        ```
        
    - ##### componentWillUpdate 和 componentDidUpdate
        > 如果组件的 shouldComponentUpdate 函数返回 true, React 接下来就会依次调用对应组件的 componentWillUpdate、 render 和 componentDidUpdate 函数 。

- #### 卸载过程 componentWillUnmount
    > React 组件的卸载过程只涉及一个函数 componentWillUnmount ， 当 React 组件要从
DOM 树上删除掉之前，对应的 componentWillUnmount 函数会被调用，所以这个函数适
合做一些清理性的工作 。  
<br>
componentWillUnmount 中的工作往往和 componentDidMount 有关，比如，在
componentDidMount 中用非 React 的方法创造了一些 DOM 元素，如果撒手不管可能会造
成内存泄露，那就需要在 componentWillUnmount 中把这些创造的 DOM 元素清理掉。

### 组件向外传递数据
