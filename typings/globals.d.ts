declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface System {
  import<T>(module: string): Promise<T>;
}

declare var System: System;

declare namespace JsonAPI {
  export interface IRequest {
    [todo: string]: any;
  }

  export interface IResponse {
    data?: IArticle[];
    errors?: IError[];
  }

  export interface IArticle {
    id: number;
    type: string;
    attributes: {
      [key: string]: any;
    }
  }

  export interface IError {
    title?: string;
    detail?: string;
    id?: number;
    status: number;
    meta: {
      [key: string]: any;
    }
  }
}

declare namespace HTTP {
  export enum EMethod {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
  }
  export enum ECode {
    Continue = 100,
    SwitchingProtocols = 101,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    Ambiguous = 300,
    MultipleChoices = 300,
    Moved = 301,
    MovedPermanently = 301,
    Found = 302,
    Redirect = 302,
    RedirectMethod = 303,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    Unused = 306,
    RedirectKeepVerb = 307,
    TemporaryRedirect = 307,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    RequestEntityTooLarge = 413,
    RequestUriTooLong = 414,
    UnsupportedMediaType = 415,
    RequestedRangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    UpgradeRequired = 426,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505
  }

  export type TMethod = EMethod;
  export type TCode = ECode;
}

declare namespace API {
  export enum EEndpoint {
    PropertyInquiry = 'getEstimation',
    LeadCapture = 'createLead',
  }

  export enum EDataSource {
    IndexedDB = 'indexeddb',
  }

  export type TEndpoint = EEndpoint;
  export type TDataSource = EDataSource;
}

declare namespace Models {
}

