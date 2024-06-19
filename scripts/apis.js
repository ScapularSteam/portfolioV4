const url = 'https://jsonplaceholder.typicode.com/users'
const hackhour = 'https://hackhour.hackclub.com/api/clock/U06LWHNLL3B'


async function getData() {
    try{
        const response = await fetch(hackhour);

        if (response.status === 200) {
            const data = await response.json();
            console.log('Request sent sucsessfuly: ', data)
            return data
        } else {
            console.log('Server returned an error:', error)
        }
        

        return data

    } catch(error) {
        console.log('There was an error:', error)
    }
    
};



const users = getData();
console.log('test', typeof users);




