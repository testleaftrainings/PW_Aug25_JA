import { APIRequestContext } from "@playwright/test";


let token: any
let inst_url: any
let tokenType: any
let resourceId:any

export async function generateToken(request:APIRequestContext) {


      const response = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "RaviTestleaf#1432"
            }
        }
    )
        const responseBody = await response.json()
   
    token = responseBody.access_token
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type

    console.log(token);
    

}

export async function createResource(request:APIRequestContext){

    await generateToken(request)
 const response = await request.post(`${inst_url}/services/data/v64.0/sobjects/Lead/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
            "lastname": "RavindranRamdas",
            "company": "TestleafQeagle"

        }
})
const res = await response.json()
resourceId = res.id

}

export async function fetchResource(request:APIRequestContext){
 const response = await request.get(`${inst_url}/services/data/v64.0/sobjects/Lead/${resourceId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }

        })


    const rBody = await response.json();
    console.log(rBody);
    return rBody.LastName
  
    


}