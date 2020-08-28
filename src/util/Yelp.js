const apiKey = 'APornQ1Uz2T_6ayzYXbSrdxeoFJcgiVrd4AQgWj3hc449H0yZkN1yymIAQ_EufdHAFBYSQi2JL_VB0PqtfY46RUkAqG4ybLFnWFDbH_1Eip8gpyZku4LChyH1EBEX3Yx'


const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
export default Yelp;