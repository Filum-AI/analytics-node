const os = require('os')
const uuid = require('uuid')
const Analytics = require('.')
const client = new Analytics('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjMxOH0.5LpPhS_XI2Q3bg4bg_ZM1Flq4UJvkn0495P4EsPZ-qA', {
    'host': 'https://event.filum.gq'
})

for (let i = 0; i < 10; i++) {
    anonymous_id = uuid.v4();
    client.track({
        anonymous_id: anonymous_id,
        event_name: 'Filum Testing Event Sent',
        event_params: {
            'name': 'Harry Potter',
            'address': 'London, England',
            'age': i + 11,
            'weight': 35.5,
            'true': true,
            'false': false,
            'null_key': null,
            'object': {
                "a": 1,
                "b": "abadsfasf",
                "boolean": false,
                "true": true,
                "float": 33.3,
                "null_sub": null
            },
            "list": [
                {
                    "a": 1,
                    "b": "abadsfasf",
                    "boolean": false,
                    "true": true,
                    "float": 33.3,
                    "null_sub": null 
                },
                {
                    "a": 1,
                    "b": "abadsfasf",
                    "boolean": false,
                    "true": true,
                    "float": 33.3,
                    "null_sub": null
                }
            ],
            "empty_dict": {},
            "empty_list": []
        },
        origin: 'Example App'
    });
    client.identify({
        anonymous_id: anonymous_id,
        event_params: {
            "username": "theboywholived_2021",
            "name": "Harry Potter",
            "age": i + 11,
            "weight": 35.5,
            "email": "the_boy_who_lived@gmail.com",
            "phone": "+123 456 6789"
        },
        origin: "Example App"
    });
}

client.flush()
