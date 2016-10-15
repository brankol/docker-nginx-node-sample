# Docker with Nginx, Node and PM2

Usage:
    
    # install dependencies, might be moved to build too
    npm install
    
    # build images 
    npm run-script build
    
    # run a dev instance
    # WILL mount local files (and pm2 will --watch the changes to restart)
    npm run-script dev
    
    # figure out your IP
    npm run-script ip
    
    # run a prod instance
    # WILL NOT mount local files, only uses files embedded in the images
    npm run-script prod
    
    # monitor logs stream
    npm run-script logs

