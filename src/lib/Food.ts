//定义类 
class Food{
    element:HTMLElement
    maxWidth:number
    constructor(maxWidth:number =29){
        //获取页面中的food元素 
        this.element = document.getElementById('food')!; //不可能为空 尾部加上叹号 
        this.maxWidth = maxWidth
    }
    //获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }
    set X(x:number){
        this.X = x
    }
    set Y(y:number){
        this.Y = y
    }

    change(){

        /**
         * 随机生成位置 0 到290之间的随便位置 
         * 食物的坐标必须是10的倍数，因为蛇移动一次就是一格
         */ 
        Math.round(Math.random() *29 ) * 10;//0-290之间的一个整数
        this.element.style.left =Math.round(Math.random() *this.maxWidth ) * 10 + "px"
        this.element.style.top = Math.round(Math.random() *this.maxWidth ) * 10 + "px"

    }

}
export default Food