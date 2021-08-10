const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

var books = ["shoe dog", "atomic habits"];

    rl.setPrompt(`Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit `);
    rl.prompt();
                                                                   
    rl.on('line', (answer) => {

        if (answer == 1) {
            for (var i = 0; i < books.length; i++) {
                console.log(books[i]);
            }
            console.log('Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit');
        }

        else if (answer == 2) {
            rl.question(`Enter the name of the book to be added `, (book) => {
                books.push(book);
                console.log('Book added successfully');
                console.log('Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit');
                 
            })
        }

        else if (answer == 3) {
            
            rl.question(`Are you sure you want to quit - press Y to quit `, (res) => {
                if (res == 'Y' || res =='y') rl.close();

         })

      }

    })

rl.on('close', () => {
    console.log('bye bye')
})








