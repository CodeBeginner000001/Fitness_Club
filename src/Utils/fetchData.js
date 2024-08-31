
export const exerciseOptions={
    method: 'GET',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': import.meta.env.VITE_API_KEY, // ashu2300ag,
		// 'x-rapidapi-key': import.meta.env.VITE_API_KEY_1, // ashu2100ag,
		// 'x-rapidapi-key': import.meta.env.VITE_API_KEY_2, // adarsh001ag,

	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
		'x-rapidapi-key':  import.meta.env.VITE_API_KEY, //ashu2300ag
		// 'x-rapidapi-key': import.meta.env.VITE_API_KEY_1, // ashu2100ag,
		// 'x-rapidapi-key': import.meta.env.VITE_API_KEY_2, // adarsh001ag,
	}
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
	console.log(import.meta.env);
    const data=await response.json();
    return data;
}