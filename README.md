## Get Started

Change the `PORT` and `DATABASE` values in the `.env`

### Docker supports

This template has docker support built in. To use, modify the `DATABASE` and `PORT` parameters in the `.env` and `Dockerfile`. Then edit the default username and service name in `docker.sh`.

Then run 

    $ docker.sh

    
### Script
    
    # qp-assessment_microservice.bat

    git clone git@github.com:Avinash-37/qp-assessment.git.
    git init
    git add .
    git commit -m "initial commit"
    @echo Next steps
    @echo Change the package name in package.json
    @echo Change the PORT and DATABASE in .env
    @echo Add origin to this repository
    @echo git remote add origin your_repo_url
    @echo I will now install npm packages
    pause
    npm i


