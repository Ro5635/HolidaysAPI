# HolidaysAPI

![Build status](https://circleci.com/gh/Ro5635/HolidaysAPI.svg?style=shield&circle-token=f634ad928218a89b788e9762b2837ba1731a9900)

API For Finding the Public Bank Holidays within the UK, England region. Built using the [serverless](https://serverless.com/) framework, this produces a cloudformation template for automated deployment to AWS Lambda and API gateway on your own AWS account.

## API Referance

/holidays/{bankHolidayAPIIdentifier}/{year}

|Bank Holiday| bankHolidayAPIIdentifier |
|-----------:|-------------------------:|
|Easter Mon   | eastermon               |
|Good Friday | goodfri  |
|Christmas   | christmasbankhol         |
|Boxing Day   | boxingdaybankhol        |
|New Years Day| newyearsbankhol         |
|May Day      | maydaybankhol           |
|Spring       | springbankhol           |
|Summer       | summerbankhol        |

### Additional Days Avalible

|Day | bankHolidayAPIIdentifier |
|-----------:|-------------------------:|
|Easter Sunday   | eastersun               |


Example:      

/holidays/eastermon/2017

## Live Version

The API is deployed and publicaly avalible at:

https://holidayapi.robertcurran.uk/holidays/goodfri/2019

https://holidayapi.robertcurran.uk/version

Base URL:

https://holidayapi.robertcurran.uk/

## Implementation Details

This uses the [serverless](https://serverless.com/) framework along with Express, all of the bank holiday API endpoints are handled by the same lambda function, the lambda via the use of Express handles the routing to the appropiate handler for any given call to the API. 

Made this because I could not find the UK bank holidays as an API call without paying a stupendous amount.

To Test the lambda function localy with the web API utilise the [serverless](https://serverless.com/) framework and execute the following after git cloning:

``` javascript
npm install
serverless offline start
```

## Docker Image

 I have created a docker image that exposes the API on port 3000, this is avalible at:
 
 https://hub.docker.com/r/ro5635/holidaysapi/
 
 This can be aquired and executed using the following docker command:
 
 ```bash
  docker run --rm -p {localMachinePort}:3000  ro5635/holidaysapi
```
## Test

Mocha tests have been compleated using the bank holidays dates provided on the [UK goverment website](https://www.gov.uk/bank-holidays), these can be found in the test directory. All commits to the master branch are ran through the CI system, CircleCI. The CI system automaticaly builds on commit and runs all of the mocha tests.

:squirrel:
