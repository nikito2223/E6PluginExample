module.exports = {
    init(app) {
        console.log("Awesome Plugin загружен!");
        
        // Можно, например, добавить кастомную команду
        app.on('ready', () => {
            console.log("Приложение готово — плагин активен");
        });
    },
    onEnable() {
        console.log("Awesome Plugin включён!");
    },
    onDisable() {
        console.log("Awesome Plugin выключен!");
    }
};
