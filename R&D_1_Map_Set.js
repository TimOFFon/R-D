//==========================================
//==========================================
//==========================================
//            R&D-1 Map/Set
//==========================================
//==========================================
//==========================================


{
//------------------------------------------
//             Теория Map (методы)
//------------------------------------------
// let map =new Map(); // создает коллекцию
// map.set(key, value); // записывает
// map.get(key); // возвр. value/undefined
// map.has(key); // если key, то boolean
// map.delete(key); // удаляет пару
// map.clear(); // очищает коллекцию
// map.size; // количество элементов
}
{
//----------------------------------------
//              Пример (методы)
//----------------------------------------
let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

// console.log(map.get(1)); // num1
// console.log(map.get('1')); // str1
// console.log(map.get(true)); // bool1
// console.log(map.size); // 3

let obj = {'key': 1};
map.set(obj, 1);

// console.log(map.get(obj));// 1

map.set(3, 3).set(4, 4).set(5, 5);

// console.log(map.size); // 7
}

//-------------------------------------------
//         Теория (перебор Map)
//-------------------------------------------
/*
map.keys() - итер.объект по ключам
map.values() - итер.объект по значениям
map.entries() - итер.объект по парам
for..of - [ключ, значение]

*/

//------------------------------------------
//         Пример (перебор Map)
//------------------------------------------
{
let veg = new Map([
    ['cucumbre', 10],
    ['tomates', 20],
    ['onion', 3]
]);

// console.log(veg.keys());
// {'cucumbre', 'tomates', 'onion'}

// console.log(veg.values());
// {10, 20, 3}

// console.log(veg.entries());
// {'cucumbre' => 10, 'tomates' => 20, 'onion' => 3}

// for (let item of veg) console.log(item);
/*
      ['cucumbre', 10]
      ['tomates', 20]
      ['onion', 3]
*/
}


//------------------------------------------
//         Пример (порядок вставки)
//------------------------------------------
{
    let order = new Map();
    order.set(1, 1);
    order.set(2, 2);
    order.set(3, 3);

    // console.log(order);
    //Map(3) {1 => 1, 2 => 2, 3 => 3}

}



//------------------------------------------
//             Пример (forEach)
//------------------------------------------
{
    let things = new Map([
        ['ball', 1],
        ['shose', 2],
        ['short', 1]
    ]);

    things.forEach((value, key, things) => {
        things.set(key, (value * 1000));
    })

    // console.log(things);
    //{'ball' => 1000, 'shose' => 2000, 'short' => 1000}
}


//--------------------------------------------
//          Теория (Object => Map)
//--------------------------------------------
{
    let obj = {
        name: 'trash',
        age: 777
    };

    // console.log(Object.entries(obj));
    //[['name', 'trash'],['age', 777]]

    let map = new Map(Object.entries(obj));

    // console.log(map);
    //{'name' => 'trash', 'age' => 777}
}


//--------------------------------------------
//          Теория (Map => Object)
//--------------------------------------------
{
    let arrToObj = Object.fromEntries([
        ['men', 5],
        ['vomen', 10],
        ['children', 3]
    ]);

    // console.log(arrToObj);
    // {men: 5, vomen: 10, children: 3}
}


//--------------------------------------------
//          Пример (Map => Object)
//--------------------------------------------
{
    let map = new Map();
    map.set('red', 1)
       .set('green', 2)
       .set('blue', 3);

    let obj = Object.fromEntries(map);

    // console.log(obj);
    // {red: 1, green: 2, blue: 3}
}


//-------------------------------------------
//            Теория Set (методоы)
//-------------------------------------------
/* 
    Объект Set - коллекция без ключей,
    значение добав. только один раз.
*/
{
    let set = new Set();
    set.add(1);
    set.delete(1);
    set.has(1); // false
    set.clear(); // отчищает коллекцию
    set.size; // возвр. количество
}


//-------------------------------------------
//            Пример Set (методы)
//-------------------------------------------
{
    let set = new Set();
    
    let john = {name: 'John'};
    let mary = {name: 'Mary'};
    let pete = {name: 'Pete'};

    set.add(john);
    set.add(john);
    set.add(john);
    set.add(pete);
    set.add(pete);
    set.add(mary);

    // console.log(set);
    //{{name: 'John'},{name: 'Mary'},{name: 'Pete'}}
}


//--------------------------------------------
//             Перебор объека Set

//            for..of или forEach
//--------------------------------------------
{
    let arr = [1, 1, 1, 2, 2, 3];
    let set = new Set(arr);

    // for(let item of set) {
    //     console.log(item);// 1 2 3
    // }

    // set.forEach(item => {
    //     console.log(item); // 1 2 3
    // })
}


//--------------------------------------------
//                Методы Set
//--------------------------------------------
{
    let set = new Set([1, 1, 2, 3, 3, 3]);

    // console.log(set.values());// {1, 2, 3}
    // console.log(set.keys()); // {1, 2, 3}
    
    // console.log(set.entries());
    //{1 => 1, 2 => 2, 3 => 3}
}
