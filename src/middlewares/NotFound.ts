import { Request, Response, NextFunction } from "express";

export function NotFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    message: "Endpoint não encontrado",
    path: req.originalUrl,
    method: req.method,
  });
}
