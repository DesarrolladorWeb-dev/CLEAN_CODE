const Singleton = (function () {

    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            // Siempre sera la misma instancia porque como ya paso 
            // ya no creara nueva instancia porque instancia ya tiene valor y no pasa por el if
            return instance;
        }
    };
})();

function main() {
    // Siempre apuntan al mismo espacio en memoria
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2)); //true
}

main();