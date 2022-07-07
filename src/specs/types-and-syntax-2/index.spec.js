describe('default parameters - types and syntax - 2', () => {
    test('defines objects precisely', () => {
        let zakk = {
                name: "Zakk",
                getName: () => {
                    return this.name;
                }
            },
            instances = [
                zakk instanceof String,
                zakk instanceof Number,
                zakk instanceof Boolean,
                zakk instanceof Symbol,
                zakk instanceof Array,
                zakk instanceof Object,
                zakk instanceof Function
            ];

        expect(typeof zakk).toEqual( /* YOUR ANSWER HERE */ );

        /* SWAP THE INDEX 99 TO THE CORRECT VALUE */
        expect(instances[99]).toEqual(true);
    });
})

describe('creating own object with properties and methods - types and syntax - 2', () => {
    let car;

    beforeEach(() => {
        // define the car object (properties and methods) to pass the following tests
        car = {
            startEngine() {
                return;
            }
        };
    })

    test('checking properties structure', () => {
        expect(car.hasOwnProperty("name")).toBeTruthy();
        expect(typeof car.name).toEqual("string");

        expect(car.hasOwnProperty("model")).toBeTruthy();
        expect(typeof car.model).toEqual("string");

        expect(car.hasOwnProperty("color")).toBeTruthy();
        expect(typeof car.color).toEqual("string");

        expect(car.hasOwnProperty("engineRunning")).toBeTruthy();
        expect(typeof car.engineRunning).toEqual("boolean");
    });

    test('checking methods structure', () => {
        expect(car.hasOwnProperty("startEngine")).toBeTruthy();
        expect(typeof car.startEngine).toEqual("function");

        expect(car.hasOwnProperty("stopEngine")).toBeTruthy();
        expect(typeof car.stopEngine).toEqual("function");

        expect(car.hasOwnProperty("changeColor")).toBeTruthy();
        expect(typeof car.changeColor).toEqual("function");

        expect(car.hasOwnProperty("fly")).toBeFalsy();
        expect(typeof car.fly).toEqual("undefined");
    });

    test('checking initial properties', () => {
        expect(car.engineRunning).toBe(false);
    });

    test('checking methods logic', () => {
        const spyOnStartEngine = jest.spyOn(car, "startEngine");
        const spyOnChangeColor = jest.spyOn(car, "changeColor");
        const spyOnStopEngine = jest.spyOn(car, "stopEngine");

        car.startEngine();
        expect(spyOnStartEngine).toHaveBeenCalled();
        expect(car.engineRunning).toBeTruthy();

        car.changeColor("orange");
        expect(spyOnChangeColor).toHaveBeenCalled();
        expect(car.color).toEqual("orange");

        car.stopEngine();
        expect(spyOnStopEngine).toHaveBeenCalled();
        expect(car.engineRunning).toBeFalsy();
    });
    test('extending an object with new properties', () => {
        // Create an object (named newCar) based on the car object using the Object.create() method
        // Extend the created object with properties and methods

        let newCar = Object.create(car);
        /* add properties and methods to the newCar object */

        const spyOnStartClimatronic = jest.spyOn(newCar, "startClimatronic");
        const spyOnStopClimatronic = jest.spyOn(newCar, "stopClimatronic");

        // properties
        expect(newCar.hasOwnProperty("climatronicOn")).toBeTruthy();
        expect(typeof newCar.climatronicOn).toEqual("boolean");

        // methods
        expect(newCar.hasOwnProperty("startClimatronic")).toBeTruthy();
        expect(typeof newCar.startClimatronic).toEqual("function");

        expect(newCar.hasOwnProperty("stopClimatronic")).toBeTruthy();
        expect(typeof newCar.stopClimatronic).toEqual("function");

        expect(newCar.hasOwnProperty("startEngine")).toBeFalsy();
        expect(newCar.hasOwnProperty("stopEngine")).toBeFalsy();

        // initial values
        expect(newCar.climatronicOn).toBeFalsy();

        // running methods
        newCar.startClimatronic();
        expect(spyOnStartClimatronic).toHaveBeenCalled();
        expect(newCar.climatronicOn).toBeTruthy();

        newCar.stopClimatronic();
        expect(spyOnStopClimatronic).toHaveBeenCalled();
        expect(newCar.climatronicOn).toBeFalsy();
    });
})

describe('hoisting - types and syntax - 2', () => {
    let logMemory;
    function log(){
        let args = Array.prototype.slice.call(arguments);
        logMemory = logMemory.concat(args);
    }

    beforeEach(() => {
        logMemory = [];
    });

    test('should create undefined before variable initialization', () => {
        log(a, b, c);
        var a = 1;
        var b;
        var c = 3;
        log(a, b, c);

        expect(logMemory).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('should create variables per function memory frame', () => {
        var a;
        (() => {
            log(a);
            var a = 1;
            log(a);
        })();
        log(a);

        expect(logMemory).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('should create undefined before function initialization', () => {
        expect(typeof Add).toEqual( /* YOUR ANSWER HERE */ );

        var Add = function(a, b) {
            return a + b;
        }

        expect(typeof Add).toEqual( /* YOUR ANSWER HERE */ );
    });
})

describe('creating functions with constructors - types and syntax - 2', () => {
    let CarConstructor;
    beforeEach(() => {
        //define the CarConstructor (it should take three parameters - name, model and color)
        CarConstructor = function(/* arguments */){
            /* properties and methods */
        }
    });
    test('should have own properties', () => {
        // create car passing the name, model and color to the CarConstructor (using the 'new' operator)
        let car;
        expect(car.name).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.model).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('should have own methods', () => {
        // create car passing the name, model and color to the CarConstructor (using the 'new' operator)
        let car;
        expect(car.hasOwnProperty("getName")).toEqual(true);
        expect(car.hasOwnProperty("getModel")).toEqual(true);
        expect(car.hasOwnProperty("changeColor")).toEqual(true);
    });

    test('checking methods logic', () => {
        // create car passing the name, model and color to the CarConstructor (using the 'new' operator)
        let car;
        const spyOnChangeColor = jest.spyOn(car, "changeColor");

        expect(car.getName()).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.getModel()).toEqual( /* YOUR ANSWER HERE */ );
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
        car.changeColor("orange");
        expect(spyOnChangeColor).toHaveBeenCalled();
        expect(car.color).toEqual( /* YOUR ANSWER HERE */ );
    });
})
