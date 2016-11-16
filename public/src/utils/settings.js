
export const ROOT_URL = 'http://backend.eu-west-1.elasticbeanstalk.com';

export const TOKEN = localStorage.getItem('token');
export const TOKEN_SESSION = sessionStorage.getItem('token_session');

export const HEADERS = {
    'Authorization': ' Token ' + (TOKEN ? TOKEN : TOKEN_SESSION)
}