const USER_BASE =
 // "https://osvaldo.dk/tomcat/forberedelse/api";
 "http://localhost:8080/jpareststarter/api"
const INFO_BASE =
 // "https://osvaldo.dk.com/tomcat/forberedelse/api/info";
"http://localhost:8080/jpareststarter/api/info"


const USER = {
  LOGIN: `${USER_BASE}/login`,
  SIGNUP: `${USER_BASE}/user`,
  HENT: `${USER_BASE}/user`,
  ADDRACE:`${USER_BASE}/race`,
}



const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
}

export {USER, INFO}
