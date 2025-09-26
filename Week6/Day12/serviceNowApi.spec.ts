//endpoint
//Authorization
//Headers
//Request Body


import { test } from "@playwright/test";

let id : any

test.describe.serial(`Service Now`,async () => {

test(`Creating Incident using Playwright with API`, async ({ request }) => {

    const response = await request.post("https://dev356721.service-now.com/api/now/table/incident",
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YWRtaW46SD1adDl4RUB1ZTlQ"
            },
            data: {
                "description": "Network Issue Created through PLAYWRIGHT",
                "short_description":"Short Description"
            }
        }
    )

    const responseBody = await response.json();
   // console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());

     id = responseBody.result.sys_id
     console.log(responseBody.result.sys_id);
     
    
    
})

test(`Fetch the incident using Playwright with API`,async ({request}) => {
    const response = await request.get(`https://dev356721.service-now.com/api/now/table/incident/${id}`,
    {
        headers:{
             "Content-Type": "application/json",
             "Authorization": "Basic YWRtaW46SD1adDl4RUB1ZTlQ"
        }
    })
    const respons = await response.json()
    console.log(respons);

    console.log(response.status());
    console.log(response.statusText());    
    

})


test(`Update the incident using Playwright with API`,async ({request}) => {
    const response = await request.patch(`https://dev356721.service-now.com/api/now/table/incident/${id}`,
    {
        headers:{
             "Content-Type": "application/json",
             "Authorization": "Basic YWRtaW46SD1adDl4RUB1ZTlQ"
        },
        data:{
            "short_description":"Updated Short Description",
            "location":"Chennai"
        }
    })
    const res = await response.json()
    console.log(res);

    console.log(response.status());
    console.log(response.statusText());  
    

})

test(`Delete the incident using Playwright with API`,async ({request}) => {
    const response = await request.delete(`https://dev356721.service-now.com/api/now/table/incident/${id}`,
    {
        headers:{
             "Content-Type": "application/json",
             "Authorization": "Basic YWRtaW46SD1adDl4RUB1ZTlQ"
        }
    })
    const respons = await response.json()
    console.log(respons);

    console.log(response.status());
    console.log(response.statusText());    
    

})
})
