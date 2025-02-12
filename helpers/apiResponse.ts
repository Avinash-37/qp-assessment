import { Response } from "express";

interface ApiResponse {
  status: number;
  data: any | null;
  error: any | null;
  message: string | null;
  token: string | null;
  metadata: any | null;
}

export const successResponse = (res: Response,msg: string,data: any = null,metadata: any = null,token?: string,error?: any): Response => {
  const resData: ApiResponse = {
    status: 200,
    data: data || null,
    error: error || null,
    message: msg || null,
    token: token || null,
	metadata:metadata || null
  };
  	if (msg) {
		resData.message = msg;
	}
	if (error) {
		resData.error = error;
	}
	if (data) {
		resData.data = data;
	}
	if(metadata){
		resData.token = metadata
	}
	return res.status(200).json(resData);
	};

export const alreadyExist = (res: Response,msg: string,data: any = null,metadata: any = null,token?: string,error?: any): Response => {
	const resDataAl: ApiResponse = {
		status: 606,
        data:null,
        error:null,
        message:null,
		token: token || null,
		metadata:metadata || null
	};

	if (msg) {
		resDataAl.message = msg;
	}
    if (error) {
		resDataAl.error = error;
	}
	if (data) {
		resDataAl.data = data;
	}
    if(metadata){
		resDataAl.token = metadata
    }
	return res.status(606).json(resDataAl);
};

export const errorResponse = (res: Response,msg: string,data: any = null,metadata: any = null,token?: string,error?: any): Response => {
	const resDataEr: ApiResponse = {
		status:400,
        data:null,
        error:null,
        message:null,
		token: token || null,
		metadata:metadata || null
	};
	if (msg) {
		resDataEr.message = msg;
	}
    if (error) {
		resDataEr.error = error;
	}
	if (data) {
		resDataEr.data = data;
	}
    if(metadata){
		resDataEr.token = metadata
    }
	return res.status(400).json(resDataEr);
};

export const authenticationError = (res: Response,msg: string,data: any = null,metadata: any = null,token?: string,error?: any): Response => {
	const resDataEr: ApiResponse = {
		status:401,
        data:null,
        error:null,
        message:null,
		token: token || null,
		metadata:metadata || null
	};
	if (msg) {
		resDataEr.message = msg;
	}
    if (error) {
		resDataEr.error = error;
	}
	if (data) {
		resDataEr.data = data;
	}
    if(metadata){
		resDataEr.token = metadata
    }
	return res.status(403).json(resDataEr);
};

export const invalidTokenAccessDenied = (res: Response,msg: string,data: any = null,metadata: any = null,token?: string,error?: any): Response => {
	const resDataEr: ApiResponse = {
		status:403,
        data:null,
        error:null,
        message:null,
		token: token || null,
		metadata:metadata || null
	};
	if (msg) {
		resDataEr.message = msg;
	}
    if (error) {
		resDataEr.error = error;
	}
	if (data) {
		resDataEr.data = data;
	}
    if(metadata){
		resDataEr.token = metadata
    }
	return res.status(403).json(resDataEr);
};
