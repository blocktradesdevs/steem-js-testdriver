Testing app

It is possible to change url host, testing account and private active key (wif) with query params:

- urlHost - default is http://192.168.6.100:8090
- account - default is initminer
- wif - default is 5HuVghGZvimhc5wkNA574wsDPwrsRfYrMAoh7UwHn8kQ5D8YZZV

Account and wif params must be passed both. There is relation between them.

Example curl: curl --request GET --url http://localhost:8080/test-a --data '{}'

Result of test there is in folder 'test'.
