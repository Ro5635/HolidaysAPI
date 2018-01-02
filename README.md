# HolidaysAPI

![Build status](https://circleci.com/gh/Ro5635/HolidaysAPI.svg?style=shield&circle-token=f634ad928218a89b788e9762b2837ba1731a9900)

API For Finding the Public Bank Holidays within the UK, England region. Designed to run as lambda functions with AWS API gateway.

## API Referance

/holidays/{bankHolidayAPIIdentifier}/{year}

|Bank Holiday| bankHolidayAPIIdentifier |
|-----------:|-------------------------:|
|Easter Mon   | eastermon               |
|Christmas   | christmasbankhol         |
|Boxing Day   | boxingdaybankhol        |
|New Years Day| newyearsbankhol         |
|May Day      | maydaybankhol           |
|Spring       | springbankhol           |
|Summer       | getsummerbankhol        |

Example:

/holidays/goodfri/2017

## Implementation Details

This uses the [serverless](https://serverless.com/) framework along with Express, all of the bank holiday API endpoints are handled by the same lambda function, the lambda via the use of Express handles the routing to the appropiate handler for any given call. 

Made this because I could not find the UK bank holidays as an API call without paying a stupendous amount.

To Test the lambda function localy with the web API use the [serverless](https://serverless.com/) framework and execute the following:

''' javascript
sls offline start
'''

:squirrel:
