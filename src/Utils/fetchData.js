export const exerciseOptions={
    method: 'GET',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': "2cd2c89ba7msh9227dfae65653c3p16fa66jsn6face0470b79"
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key': "2cd2c89ba7msh9227dfae65653c3p16fa66jsn6face0470b79"
	}
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}