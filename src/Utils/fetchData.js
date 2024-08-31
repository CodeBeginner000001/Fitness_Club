
export const exerciseOptions={
    method: 'GET',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': import.meta.env.VITE_API_KEY, // ashu2300ag,
		// 'x-rapidapi-key': "2cd2c89ba7msh9227dfae65653c3p16fa66jsn6face0470b79" // ashu2300ag,

	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key':  import.meta.env.VITE_API_KEY, //ashu2300ag
		// 'x-rapidapi-key':  "2cd2c89ba7msh9227dfae65653c3p16fa66jsn6face0470b79", //ashu2300ag
	}
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
	// console.log(import.meta.env);
    const data=await response.json();
    return data;
}