export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/118305699?v=4";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${String(import.meta.env.VITE_TMDB_API_KEY)}` 
    }
  };

  export const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

  export const SUPPORTED_LANG =[
    {
      identifier : 'en' , name : 'English'
    },
    {
      identifier : 'hindi' , name : 'Hindi'
    },
    {
      identifier : 'gujarati' , name : 'Gujarati'
    }
  ];

  export const API_KEY = String(import.meta.env.VITE_API_KEY);
  