function Cooker(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.cook = () => 'cooking in progress'
}

const c1 = new Cooker('alfred', '28', '1.8', '70');
console.log(c1.cook())