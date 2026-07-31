let retry=0;
do{
    console.log("execute");
    console.log("retrying",retry);
    retry++;
}while(retry<5);