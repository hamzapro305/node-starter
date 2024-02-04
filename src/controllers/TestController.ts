import { NextFunction, Request, Response } from "express";
import { singleton } from "tsyringe";

@singleton()
export class TestController {
    constructor() {}

    public test(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: "Everything is running!" });
    }
}
