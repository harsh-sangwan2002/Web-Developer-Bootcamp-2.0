let val = prompt("What would you like to do?");
const todos = []

while (val !== 'quit') {

    if (val == 'new') {
        const todo = prompt("Enter new todo");
        todos.push(todo);
        console.log(`${todo} added to the list`);

        val = prompt("What would you like to do?");
    }

    else if (val == 'list') {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
        val = prompt("What would you like to do?");
    }

    else if (val == 'delete') {
        const index = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        }
        else {
            console.log("Invalid index");
        }
        val = prompt("What would you like to do?");
    }

    else {
        console.log("Invalid input");
        val = prompt("What would you like to do?");
    }
}