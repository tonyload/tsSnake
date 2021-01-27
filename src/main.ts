
import './main.scss'

/**
 * 对象中主要包含：
 * 属性
 * 方法
 * 
 */
class Person {
    constructor(){
    }   
    //定义属性 
    name='sunwukong'
    //只读属性
    readonly test:string = '321321'
    //静态属性  不需要实例化就可以直接访问
    static age:number = 19;

    sayHello(){
        console.log("hi !"+this.name)
    }

    static sayHi(){
        console.log("hello !"+this.name)
    }
}

const per = new Person()

console.log(Person.age)
per.sayHello()
Person.sayHi()
// console.log(per.sayHello())


/**
 * 抽象类，不能被实例化 只能被集成，就是专门被用来抽象的类
 * 抽象类中，可以去添加抽象方法
*/
abstract class Animal{
    // name:string
    // age:number
    constructor(public name:string,public age:number){   
        this.name = name
        this.age = age
    }

    /**
     * 抽象方法，没有方法体，只能被定义在抽象类中，
     * 子类必须对抽象方法进行重写:::子类强制实现
     */
    abstract sayHello():void
}

class Dog extends Animal{
    constructor(name:string,age:number){
        //在子类中写了构造函数，在子类函数中必须对父类的构造函数进行调用
        super(name,age)
    }
    //子类强制实现
    sayHello(){
        console.log("hi wang wnag wag !"+this.name +"my age is "+this.age)
    }
}


const dog1 = new Dog("小黑",12)
dog1.sayHello()


//描述一个对象的类型
type myType = {
    name:string,
    age:number,
    // [propname:string]:any
}
const obj:myType = {
    name:'luoding',
    age:111
}

/**
 * 接口：用来定义一个类的结构
 * 用来定义一个类中应该包含的属性和方法，
 * 同时，接口也可以当成类型声明去使用
 */

 interface Iuser{
    name:string,
    uID:number,
    isMe:boolean,
    init():void
}


// 接口可以在定义类的时候限制类的结构
class User implements Iuser{
    name:string
    uID:number
    isMe:boolean
    constructor(name:string,uID:number,isMe:boolean){
        this.name = name
        this.uID = uID
        this.isMe = isMe
    }
    init(){
        console.log("ready to init!")
    }
}



/**
 * 属性的封装
 */
class Thing {
    //ts中可以在属性前面添加修饰符 

    //pubick修饰符 可以在任意位置修改 
    private _name:string 

    //private修饰符 只能在类内部进行修改 
    private _age:number

    //protected 受保护的属性，只能在当前类以及当前类的子类中进行使用
    protected _gender:number
    constructor(name:string,age:number,gender:number){
        this._name = name
        this._age = age
        this._gender = gender
    }   


    /**
     * 提供set和get方法 主动权在类 要不要提供修改属性的方法到外部，
     * 其次，可以判断类型是否合法 
     * getter 方法用来读取属性
     * setter 方法用来设置属性，-他们被称为属性的存取器
     */
    // getName(){
    //     return this.name
    // }
    // setName(name:string){
    //     this.name = name
    // }
    // getAge(){
    //     return this.age
    // }
    // setAge(age:number){
    //     if(age >=0)
    //         this.age = age
    // }

    /**
     * TS 中设施GETTER方法的方式
     * 可以更友好的调用set和get方法，如：实例.name = ''---->相当于执行了set方法 
     */

     get name(){
         return this._name
     }
     set name(name:string){
        this._name = name
     }
     get age(){
         return this._age
     }
     set age(age:number){
         if(age >=0)
            this._age = age
     }

     set gender(gender:number){
         if(gender == 1 || gender == 0){
                this._gender =gender
         }
     }


     
    /**
     * 当定义函数或类时，如果遇到类型不明确的就可以使用泛型 
     * 泛型 ：就是一个不确定的类型 ，当参数类型不明确的时候，给我们指定一个不确定的类型，来取代any 
     */
    fn<T>(a:T):T{
        return a
    }
    //泛型可以同时指定多个
    fn2<T,K>(a:T,b:K):T{
        return a
    }
}


/**
 * 属性可以被任意修改，会导致对象中的数据变得非常不安全
 */
const per1 =new Thing("zhangsan",12,1)
console.log(per1.name)
per1.age = -321
per1.gender = 12321
console.log(per1)


console.log(per1.fn(10))//不指定泛型
console.log(per1.fn<string>("helo wrold!"))//指定泛型
console.log(per1.fn2<string,number>("hello wrold",123))//


