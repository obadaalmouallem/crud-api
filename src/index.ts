import express from "express";
import { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 5000;

interface User {
    id: string,
    name: string,
    age: number
}

const users: User[] = [
    { id: "1", name: "user1", age: 22 },
    { id: "2", name: "user2", age: 19 },
    { id: "3", name: "user3", age: 20 }
]

app.get("/users", (req: Request, res: Response) => {
    res.json(users)

})


app.listen(port, () => {
    console.log(`app is  listening on port ${port}`)
})
