export const getDishesAPI = () => {
    const dishesEndpoint = 'http://www.mocky.io/v2/5dfaf6792f00007900ff9b41'

    return fetch(dishesEndpoint, { method: 'GET' }).then(
        res => res.json()
    );
}