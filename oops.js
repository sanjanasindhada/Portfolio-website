// class JS{
//      a=10;
//      b=20;
//     add(){
//         console.log(this.a+this.b);
//     }
//     add(){
//         console.log(this.a/this.b);
//     }
// }
// var obj=new JS();
// obj.add();

// class JS{
//     add(x,y){
//         console.log(x+y);
//     }
//     add(x,y,z){
//         console.log(x+y+z);
//     }
// }
// var obj=new JS;
// obj.add(10,20);
// obj.add(10,20,30);

class add{
     calc(x,y){
        console.log(x+y);
     }
}
class sub extends add{
 calc(x,y,z){
    console.log(x+y+z);
 }
}
var ob=new sub();
ob.calc(10,20);
ob.calc(10,20,30);


