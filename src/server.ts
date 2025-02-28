import express, {Request, Response, json} from "express";

const app = express();
const port = process.env.PORT;

app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ player: "Beckham"});
})

app.listen(port, () => {
    console.log(`🚀 Server running at port http://localhost:${port}`);
})