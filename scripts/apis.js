const url = 'https://cors-anywhere.herokuapp.com/corsdemo/https://hackhour.hackclub.com/api/clock/U06LWHNLL3B'


const request = new Request(url, {
    headers: { 
        'Content-Type': 'text/html' 
    }
})



async function getData() {
    try{
        const response = await fetch(request);

        if (response.status === 200) {
            const data = await response.json();
            console.log('Request sent sucsessfuly: ', data)
            return data
        } else {
            console.log('Server returned an error:', error)
        }
        

    } catch(error) {
        console.log('There was an error:', error)
    }
    
};

getData()









const users = getData();
console.log('test', typeof users);




