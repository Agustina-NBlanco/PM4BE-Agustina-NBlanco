import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class LoggerGlobalMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log();
        next();
    }
}

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    console.log(`Realizando petición a ${req.url} en el metodo ${req.method} a la hora ${new Date().toLocaleString()}`);
    next();

}