const apiKey = 'zRrjQKncso9dT4p-oKh1VKsk6BvdyaHKXcD5g-VRayDeUNrLfMV-CkjBdFhUTXf8fEDyjnFMgpJOwDdFe--S1MsUSGCxtlu5SExP7PBaCKXllKfGAxgYoIOYCvQlYXYx';

const Yelp = {
 search (term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => { 
        console.log('this is response', response);
        if (response.ok){
            return response.json();
        }
        throw new Error('Reqest failed!');
    })
    .then(jsonResponse => {
        console.log('This is jsonResponse', jsonResponse);
        if (!jsonResponse && jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount:business.review_count
                }
            })
        }
        console.log('Error occurs in jsonResponse');
    })
    }
}

export default Yelp;