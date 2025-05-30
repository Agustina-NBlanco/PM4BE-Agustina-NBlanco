

export const keepServerAwake = () => {
    const url = process.env.SERVER_URL

    if (!url) {
        console.log('SERVER URL no esta configurado');
        return;
    }

    setInterval(async () => {
        try {
            const res = await fetch(url)
            console.log('Servidor Activo', res.status);

        } catch (error) {
            console.error('Error al mantener el servidor activo', error.message);
        }
    },14 * 60 * 1000)

}