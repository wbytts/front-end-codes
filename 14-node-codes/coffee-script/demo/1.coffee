console.log('Hello')

square = (x) -> x * x
cube   = (x) -> square(x) * x
fun = (x) -> console.log(square(x), cube(x))

fun(3)

