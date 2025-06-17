### How to reproduce

1. 
run `npm install` inside the host/ and mfe/ folder.
run `npm start` inside the host/ and mfe/ folder.

2. double check that host/ runs in port :8081 , mfe should run in :8082
   
3. open http://localhost:8081

Notice how the mf-manifest.json from MFE is consumed from the right URL (port :8082)
but, subsequent calls to scripts, comes from the wrong URL (port :8083)
