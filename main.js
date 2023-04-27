const a = prompt("Напишите первое число")
const b = prompt("Напишите второе число")


if (a > b) {
    console.log("Первое число больше")
} else if (a === b) console.log("оба числа равны")
else console.log("Второе число больше")



const name = prompt("Как твоё имя?")
const Lastname = prompt("Какое твоё фамилие?")

console.log(name, Lastname)

const color = prompt("Задайте из следующий цветов  красный , жёлтый и зелёный")

if (color === "красный") {
    alert("стоять")
} else if (color === "жёлтый") {
    alert("ждать")
}else if (color === "зеленый") {
    alert("идти")
}