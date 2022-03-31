// [이름, 종류, 직업, 성별]
// const pooh = ['pooh', 'bear', 'disney character', 'boy'];
// 1. 객체 선언

const pooh = {
    name: 'pooh',
    species: 'bear',
    job: 'disney character',
    gender: 'boy',
    'sayHi': function () {
        console.log("I'm winnie the pooh, What's your name?");
    }
}

// 2. 객체 접근 : ., []

console.log(pooh['species']);
console.log(pooh['sayHi']());

// 3. 객체에 추가 및 삭제

pooh['say-bye'] = function () {
    console.log("I'm winnie the pooh, See you later");
}

console.log(pooh);

pooh.favorites = ['honey', 'friends', 'cake'];

console.log(pooh);

delete pooh.favorites;

console.log(pooh);

// 생성자 함수 : 객체를 생성해주는 함수

function Character(name, species, job, gender) {
    this.name = name;
    this.species = species;
    this.job = job;
    this.gender = gender;
    this['say-Hi'] = function () {
        console.log(`I'm ${this.name}, What's your name?`);
    }
    this['say-bye'] = function () {
        console.log(`I'm ${this.name}, See you later`);
    }
}
const winnie_the_pooh = new Character('winnie the pooh', 'bear', 'disney character', 'boy');

const snoopy = new Character('snoopy', 'dog', 'comic book character', 'boy');

const pikachu = new Character('pikachu', 'squirrel', 'pokemon character', 'boy');

console.log(snoopy, pikachu);

const obj = new Object({
    name: 'dwell',
    greeting: function () {
        console.log(`hi`);
    }
})

