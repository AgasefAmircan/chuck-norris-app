import https from 'https'

export function request(url){
    return new Promise(function(resolve,reject){
        const req=https.request(url,function (response){
        response.on('data',function(data){
            resolve(JSON.parse(data.toString()))
        });
        });
        req.on('error',reject);
        req.end();
    })
}