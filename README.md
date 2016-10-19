# Docker with Nginx, Node and PM2

Usage:

    # build images
    npm run build

    # run a dev instance
    # WILL mount local files (and pm2 will --watch the changes to restart)
    npm run dev

    # figure out your IP
    npm run ip

    # run a prod instance
    # WILL NOT mount local files, only uses files embedded in the images
    npm run prod

    # monitor logs stream
    npm run logs
