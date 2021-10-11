async function testePromise() {
    const promises = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Deu certo!"));
        }, 2000);
    });

    const resolved = await promises
                    .then((result) => result + 'Passando pelo then, e deu certo!')
                    .then((result) => result + 'Fim')
                    .catch((err) => { console.log(err.message); });

    return resolved
} 

await testePromise();