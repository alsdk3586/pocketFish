import axios, { AxiosInstance, AxiosResponse } from "axios";

// 인증 헤더
// const authHeader = function (): Record<string, string> {
//   const user: Record<string, any> = JSON.parse(
//     localStorage.getItem("user") || "{}"
//   );
//   if (Object.keys(user).length) {
//     const token = user.object.token;
//     return { Authorization: "Bearer " + token };
//   }
//   return {};
// };

const request: AxiosInstance = axios.create({
  baseURL: "https://j4a202.p.ssafy.io",
  // headers: authHeader(),
});

// 랭킹 Api
export const rankingApi: Record<string, any> = {
  async getRanking(fish_id: number): Promise<void | AxiosResponse<any>> {
    const response = await request.get(`ranking/${String(fish_id)}`);
    console.log(response);
    return response.data;
  },
};

// 보관함 Api
export const collectionApi: Record<string, any> = {
  async getCollection(user_id: number): Promise<void | AxiosResponse<any>> {
    const response = await request.get(`collection/user/${String(user_id)}`);
    console.log(response);
    return response.data;
  },
}

// Add Api
export const AddApi: Record<string, any> = {
  async getAnalysis(img:any): Promise<void | AxiosResponse<any>> {
    console.log("analysis api");
    const response= await axios.post(`https://j4a202.p.ssafy.io/ai/`,
        JSON.stringify({file:img}),{headers: {'Content-Type': 'application/JSON'}});
    //const response = await request.post(`ai`,JSON.stringify({file:img}),{headers: {'Content-Type': 'application/JSON'}});
    //console.log(response);
    return response.data;
  },
  async getFishInformation(num: number) : Promise<void | AxiosResponse<any>> {
    console.log("fish information api");
    const response = await request.get(`fish/${String(num)}`);
    //console.log(response);
    return response.data;
  }
}

// 로그인 Api
// export const userApi: Record<string, any> = {
//   async login(user: Record<string, any>): Promise<void | AxiosResponse<any>> {
//     const loginAddress = "account/login";
//     // get 방식
//     // const config = {
//     //   params: user,
//     // };
//     // const response = await request.get(loginAddress, config);
//     // post 방식
//     const userData = user;
//     const response = await request.post(loginAddress, userData);
//     if (response.status === 200) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   },
//   async signup(user: Record<string, any>): Promise<void | AxiosResponse<any>> {
//     const signupAddress = "account/signup";
//     const userData = user;
//     const response = await request.post(signupAddress, userData);
//     if (response.status === 201) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   },
//   logout(): void {
//     localStorage.removeItem("user");
//   },
// };
