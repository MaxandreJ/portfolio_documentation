const my_array = [2, 4, 8, 16];

for (var index = 0; index < my_array.length; index++)
{
  my_array[index] = my_array[index] * 2;
}

console.log(my_array);

var my_array = [2, 4, 8, 16];

const multiply_by_two = (x => x * 2);

var my_array = my_array.map(multiply_by_two);

console.log(my_array);

setInterval(function(){ console.log("Hello"); }, 3000);

function SayHello() {
    console.log('Hello!');
}

setTimeout(SayHello, 3000);