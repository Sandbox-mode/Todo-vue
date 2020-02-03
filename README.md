# Todo-vue

## Mocks
Start
```sh
npm run mocks
```
### This server return your body request.

## API
Get mocks list
```sh
get /todos/
```

Create todo
```sh
post /todos/todo
body:
{
    value: String,
    compleated: Boolean,
    checked: Boolean,
    edited: Boolean,
    deleted: Boolean,
}
```

Update todo
```sh
put /todos/todo/:id

body:
{
    value: String,
    compleated: Boolean,
    checked: Boolean,
    edited: Boolean,
    deleted: Boolean,
}
```

Delete todo
```sh
delete /todos/todo/:id
```
