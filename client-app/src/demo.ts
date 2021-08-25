
// duck typing -> how to make these two different objects RECOGNIZED by TS as same class? INTERFACE
export interface IDuck {
    name: string; 
    numLegs: number;
    makeSound?: (sound: string) => void;
}

// ? : makes the variable/function optional to implement

const duck1: IDuck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: IDuck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}



// Because makeSound is optional, TS is protecting from possibly erroneous usage of makeSound
// use ! to go around TS
// duck1.makeSound!('quack')

export const ducks = [
    duck1, 
    duck2
];