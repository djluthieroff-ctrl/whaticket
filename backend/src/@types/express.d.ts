import { Request as ExpressRequest } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: { id: string; profile: string; companyId: number };
    }

    namespace Multer {
      export interface File {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        destination: string;
        filename: string;
        path: string;
        buffer: Buffer;
      }
    }
  }
}
