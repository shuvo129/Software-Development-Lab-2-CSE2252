
let rect=require('./rectangle');

/*
let rect ={
    perimeter :(x,y) => (2*(x+y)),
    area:(x,y) => (x*y)

}
*/

function solveRect(l,b)
{
    console.log("Solving for rectange with l = "+ l + " and b = " + b);
    if(l <=0 || b <=0){
        console.log("Rectange dimention should be greter then zero: "+l + "and b:"+b);
    }
    else{
        console.log("The area of the rectange is: "+rect.area(l,b));
        console.log("The perimater of the rectange is: "+rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);