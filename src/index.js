import Person from "./components/Person"
import {Apple} from "./components/Food"

let a = '世界';

const b = 1;

let p1 = new Person("孟浩");
p1.say(`你好${a}`)

let apple1 = new Apple();
p1.eat(apple1);